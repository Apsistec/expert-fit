import { Observable, Observer } from 'rxjs';

import { Injectable } from '@angular/core';

import { CartItem } from '../models/cart-item.model';
// import { DeliveryOption } from '../models/delivery-option.model';
import { Product } from '../models/products.model';
import { ShoppingCart } from '../models/shopping-cart.model';
import { StorageService } from './storage.service';

const CART_KEY = 'cart';

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: any;
  // private deliveryOptions: DeliveryOption[];

  public constructor(private storageService: StorageService) //  private productService: ProductsService,
  //  private deliveryOptionsService: DeliveryOptionsDataService
  {
    // this.storage = this.storageService.get('cartObject');
    // this.products = this.productService.getProducts();
    // this.deliveryOptionsService.all().subscribe((options) => this.deliveryOptions = options);

    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === product.id);
    if (item === undefined) {
      item = new CartItem();
      item.productId = product.id;
      cart.items.push(item);
    }

    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);
    if (cart.items.length === 0) {
      cart.deliveryOptionId = undefined;
    }

    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  // public setDeliveryOption(deliveryOption: DeliveryOption): void {
  //   const cart = this.retrieve();
  //   cart.deliveryOptionId = deliveryOption.id;
  //   this.calculateCart(cart);
  //   this.save(cart);
  //   this.dispatch(cart);
  // }

  private calculateCart(cart: ShoppingCart): void {
    cart.itemsTotal = cart.items
      .map((item) => item.quantity * this.products.find((p) => p.id === item.productId).price)
      .reduce((previous, current) => previous + current, 0);
    // cart.deliveryTotal = cart.deliveryOptionId ?
    //                       this.deliveryOptions.find((x) => x.id === cart.deliveryOptionId).price :
    //                       0;
    cart.grossTotal = cart.itemsTotal; // + cart.deliveryTotal;
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storageService.getObject(CART_KEY);
    if (storedCart) {
      // cart.updateFrom(storedCart);
    }

    return cart;
  }

  private save(cart: ShoppingCart): void {
    this.storageService.storeObject(CART_KEY, cart);
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers.forEach((sub) => {
      try {
        sub.next(cart);
      } catch (e) {
        // we want all subscribers to get the update even if one errors.
      }
    });
  }
}
