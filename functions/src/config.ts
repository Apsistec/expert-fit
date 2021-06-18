// Initialize Firebase Admin
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// Initialize Cloud Firestore Database
export const db = admin.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

// ENV Variables
export const stripeSecret = functions.config().stripe.secret;

// Export Stripe
import Stripe from "stripe";
export const stripe = new Stripe(stripeSecret, {
  apiVersion: "2020-08-27",
});


export default {
  stripeSecret: stripeSecret,
  stripeSecretKey: process.env.STRIPE_API_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  productsCollectionPath: process.env.PRODUCTS_COLLECTION,
  customersCollectionPath: process.env.CUSTOMERS_COLLECTION,
  syncUsersOnCreate: process.env.SYNC_USERS_ON_CREATE === 'Sync'
};
