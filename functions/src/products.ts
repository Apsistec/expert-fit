import { stripe } from "./config";
import * as functions from "firebase-functions";

const getProducts = async () => {
  return stripe.products.list({
  });
};

const getPrices = async () => {
  return stripe.prices.list({
  });
};

export const stripeGetProducts = functions.https.onCall(async() => {
  return getProducts();
});

export const stripeGetPrices = functions.https.onCall(async() => {
  return getPrices();
});
