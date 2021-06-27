import * as functions from 'firebase-functions';

// A simple callable function for a sanity check
export const testFunction = functions.https.onCall(async (data, context) => {
  const uid = context.auth && context.auth.uid;
  const message = data.message;

  return `${uid} sent a message of ${message}`;
});

// export {
//     stripeAttachSource
// } from './sources';

export { stripeCreatePaymentIntent } from './charges';

export { stripeCreateSubscription, stripeGetSubscriptions, stripeCancelSubscription } from './subscriptions';

export { handleStripeWebhook } from './webhooks';

export { stripeGetCoupon } from './coupons';

export { stripeListPaymentMethods } from './customers';
