import { db, stripe } from './config';
import * as functions from 'firebase-functions';
// eslint-disable-next-line no-unused-vars
import { Stripe } from 'stripe';

export const stripeWebhookSignature = functions.config().stripe.webhook_signature;

// export const webhookHandler = async (data: any) => {
//   // const customerId = data.customer;
//   const subId = data.subscription;
//   // const customer = await stripe.customers.retrieve(customerId);
//   // const uid = await stripe.charges.retrieve({expand: metadata})
//   const uid = data.metadata.firebaseUID;

//   const subscription = await stripe.subscriptions.retrieve(subId);

//   // const active = subscription.status === 'active';

//   const docData = {
//     [subscription.id]: [subscription.status],
//   };

//   return await db.doc(`users/${uid}`).set(docData, {merge: true});
// };

// export const invoiceWebhookEndpoint = functions.https.onRequest(async (req, res) => {
//   try {
//     const sig: any = req.headers["stripe-signature"];
//     const event = stripe.webhooks.constructEvent((req as any).rawBody, sig, stripeWebhookSignature);
//     const data = event.data.object;

//     await webhookHandler(data);

//     res.sendStatus(200);
//   } catch (err) {
//     res.status(400).send(`Webhook Error: ${err.message}`);
//   }
// });

/**
 * Business logic for specific webhook event types
 */
const webhookHandlers = {
  // "payment_intent.succeeded": async (data: Stripe.PaymentIntent) => {
  //   // Add your business logic here
  // },
  // "payment_intent.payment_failed": async (data: Stripe.PaymentIntent) => {
  //   // Add your business logic here
  // },
  'customer.subscription.deleted': async (data: Stripe.Subscription) => {
    const customer = (await stripe.customers.retrieve(data.customer as string)) as Stripe.Customer;
    const userId = customer.metadata.firebaseUID;
    const userRef = db.collection('users').doc(userId);

    await userRef.update({
      [data.id]: [data.status]
    });
  },
  'customer.subscription.created': async (data: Stripe.Subscription) => {
    const customer = (await stripe.customers.retrieve(data.customer as string)) as Stripe.Customer;
    const userId = customer.metadata.firebaseUID;
    const userRef = db.collection('users').doc(userId);

    await userRef.update({
      [data.id]: [data.status]
    });
  },
  'invoice.payment_succeeded': async (data: Stripe.Invoice) => {
    const customer = (await stripe.customers.retrieve(data.customer as string)) as Stripe.Customer;
    const userSnapshot = await db.collection('users').doc(customer.metadata.firebaseUID).get();
    await userSnapshot.ref.update({ account_status: 'CURRENT' });
  },
  'invoice.payment_failed': async (data: Stripe.Invoice) => {
    const customer = (await stripe.customers.retrieve(data.customer as string)) as Stripe.Customer;
    const userSnapshot = await db.collection('users').doc(customer.metadata.firebaseUID).get();
    await userSnapshot.ref.update({ account_status: 'PAST_DUE' });
  }
  // "product.created": async (data: Stripe.Invoice) => {

  // },
  // "product.updated": async (data: Stripe.Invoice) => {

  // },
  // "product.deleted": async (data: Stripe.Invoice) => {

  // },
  // "price.created": async (data: Stripe.Invoice) => {

  // },
  // "price.updated": async (data: Stripe.Invoice) => {

  // },
  // "price.deleted": async (data: Stripe.Invoice) => {

  // },
  // "checkout.session.completed": async (data: Stripe.Invoice) => {

  // },
  // "customer.subscription.updated": async (data: Stripe.Invoice) => {

  // },
  // "tax_rate.created": async (data: Stripe.Invoice) => {

  // },
  // "tax_rate.updated": async (data: Stripe.Invoice) => {

  // },
  // "invoice.paid": async (data: Stripe.Invoice) => {

  // },
  // "invoice.upcoming": async (data: Stripe.Invoice) => {

  // },
  // "invoice.marked_uncollectible": async (data: Stripe.Invoice) => {

  // },
  // "invoice.payment_action_required": async (data: Stripe.Invoice) => {

  // },
  // "payment_intent.processing": async (data: Stripe.Invoice) => {

  // },
  // "payment_intent.canceled": async (data: Stripe.Invoice) => {

  // },
};

/**
 * Validate the stripe webhook secret, then call the handler for the event type
 */
export const handleStripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);

  try {
    await webhookHandlers[event.type](event.data.object);
    res.send({ received: true });
  } catch (err) {
    console.error(err);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};
