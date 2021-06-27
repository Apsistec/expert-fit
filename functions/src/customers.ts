/* eslint-disable no-unused-vars */
import { assertUID, catchErrors } from './helpers';
import { db, stripe } from './config';
import Stripe from 'stripe';
import * as functions from 'firebase-functions';

// /**
// Read the user document from Firestore
// */
// export const getUser = async (uid: string) => {
//   return await db
//       .collection("users")
//       .doc(uid)
//       .get()
//       .then((doc) => doc.data());
// };

// /**
// Gets a customer from Stripe
// */
// export const getCustomer = async (uid: string) => {
//   const user = await getUser(uid);
//   return assert(user, "stripeCustomerId");
// };

// /**
// Updates the user document non-destructively
// */
// export const updateUser = async (uid: string, data: Object) => {
//   return await db.collection("users").doc(uid).set(data, {merge: true});
// };

/**
Read the stripe customer ID from firestore, or create a new one if missing
*/
export async function getOrCreateCustomer(uid: string, params?: Stripe.CustomerCreateParams) {
  const userSnapshot = await db.collection('users').doc(uid).get();

  const { stripeCustomerId, email } = userSnapshot.data();

  // If missing customerID, create it
  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email,
      metadata: {
        firebaseUID: uid
      },
      ...params
    });

    await userSnapshot.ref.update({
      stripeCustomerId: customer.id
    });
    return customer;
  } else {
    return (await stripe.customers.retrieve(stripeCustomerId)) as Stripe.Customer;
  }
}

// /**
//  * Creates a SetupIntent used to save a credit card for later use
//  */
export async function createSetupIntent(uid: string) {
  const customer = await getOrCreateCustomer(uid);

  return stripe.setupIntents.create({
    customer: customer.id
  });
}

/**
 * Returns all payment sources associated to the user
 */
export async function listPaymentMethods(uid: string) {
  const customer = await getOrCreateCustomer(uid);

  return stripe.paymentMethods.list({
    customer: customer.id,
    type: 'card'
  });
}
// ///// DEPLOYABLE FUNCTIONS ////////

export const stripeListPaymentMethods = functions.https.onCall(async (data, context) => {
  const uid = assertUID(context);
  return catchErrors(listPaymentMethods(uid));
});
