import * as functions from 'firebase-functions';
import { assert, assertUID, catchErrors } from './helpers';
import { stripe } from './config';
import { getOrCreateCustomer } from './customers';
// import { attachSource } from './sources';

/**
Gets a user's charge history
*/
// export const getUserCharges = async (uid: string, limit?: number) => {
//   const customer = await getOrCreateCustomer(uid);

//   return await stripe.charges.list({
//     limit,
//     customer: customer.id,
//   });
// };

/**
Creates a charge for a specific amount
*/
// export const createCharge = async (uid: string, amount: number, idempotency_key?: string) => {
//   const customer = await getOrCreateCustomer(uid);

//   // await attachSource(uid, source);

//   return stripe.charges.create(
//       {
//         amount,
//         customer: customer.id,
//         currency: "usd",
//       },

//       {idempotency_key}
//   );
// };

export const createPaymentIntent = async (uid: string, items: any, idempotency_key?: string) => {
  const calculateTotal = (items) => {
    var total = 0;
    for (var i = 0; i < items; i++) {
      total += items.price.unit_amount[i];
    }
    return total;
  };

  /**
   * Create a Payment Intent with a specific amount
   */
  const customer = await getOrCreateCustomer(uid);
  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount: calculateTotal(items),
      currency: 'usd',
      receipt_email: customer.email
    },
    { idempotency_key }
  );

  paymentIntent.status;

  return paymentIntent;
};

// ///// DEPLOYABLE FUNCTIONS ////////

export const stripeCreatePaymentIntent = functions.https.onCall(async (data, context) => {
  const uid = assertUID(context);
  const items = assert(data, 'items');

  // Optional
  const idempotency_key = assert(data, 'itempotency_key');

  return catchErrors(createPaymentIntent(uid, items, idempotency_key));
});

// export const stripeCreateCharge = functions.https.onCall(async (data, context) => {
//   const uid = assertUID(context);
//   const amount = assert(data, "amount");

//   // Optional
//   const idempotency_key = assert(data, "itempotency_key");

//   return catchErrors(createCharge(uid, amount, idempotency_key));
// });

// export const stripeGetCharges = functions.https.onCall(async (data, context) => {
//   const uid = assertUID(context);
//   return catchErrors(getUserCharges(uid));
// });
