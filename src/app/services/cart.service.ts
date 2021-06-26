import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
    return this.getProducts();
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    // eslint-disable-next-line prefer-const
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.qty = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === product.id) {
        item.qty -= 1;
        if (item.qty === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - item.qty);
        this.cart.splice(index, 1);
      }
    }
  }
}
