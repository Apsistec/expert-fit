import * as functions from "firebase-functions";
import { assert, assertUID, catchErrors } from "./helpers";
import { stripe, db } from "./config";
import { getOrCreateCustomer } from "./customers";
// eslint-disable-next-line no-unused-vars
import { Stripe } from "stripe";
/**
Gets a user's subscriptions
*/
export const getSubscriptions = async (uid: string) => {
  const customer = await getOrCreateCustomer(uid);
  return stripe.subscriptions.list({
    customer: customer.id
  });
};

/**
Creates and charges user for a new subscription
*/
export async function createSubscription(
  uid: string,
  price: string,
  payment_method: string,
  coupon?: any,
  idempotency_key?: string
) {
  const customer = await getOrCreateCustomer(uid);

  // Attach the  payment method to the customer
  await stripe.paymentMethods.attach(payment_method, { customer: customer.id });

  // Set it as the default payment method
  await stripe.customers.update(customer.id, {
    invoice_settings: { default_payment_method: payment_method }
  });

  // await attachSource(uid, source);
  const subscription = await stripe.subscriptions.create(
    {
      customer: customer.id,
      coupon,
      items: [
        {
          price
        }
      ],
      expand: ["latest_invoice.payment.intent"]
    },
    { idempotency_key }
  );

  const invoice = subscription.latest_invoice as Stripe.Invoice;
  const payment_intent = invoice.payment_intent as Stripe.PaymentIntent;

  // Add the plan to existing subscriptions
  const docData = {
    [subscription.id]: [subscription.status]
  };
  if (payment_intent.status === "succeeded") {
    await db.doc(`users/${uid}`).set(docData, { merge: true });
  }
  return subscription;
}

/**
   Cancels a subscription and stops all recurring payments
   */
export const cancelSubscription = async (uid: string, subId: string) => {
  const subscription = await stripe.subscriptions.del(subId);

  if (subscription.status === "canceled") {
    await db.doc(`users/${uid}`).update({
      [subscription.id]: [subscription.status]
    });
  }

  return subscription;
};

// ///// DEPLOYABLE FUNCTIONS ////////

export const stripeCreateSubscription = functions.https.onCall(async (data, context) => {
  const uid = assertUID(context);
  const price = assert(data, "price");
  const coupon = assert(data, "coupon");
  const idempotency_key = assert(data, "idempotency_key");
  return catchErrors(createSubscription(uid, price, coupon, idempotency_key));
});

export const stripeCancelSubscription = functions.https.onCall(async (data, context) => {
  const uid = assertUID(context);
  const subId = assert(data, "subId");
  return catchErrors(cancelSubscription(uid, subId));
});

export const stripeGetSubscriptions = functions.https.onCall(async (data, context) => {
  const uid = assertUID(context);
  return catchErrors(getSubscriptions(uid));
});
