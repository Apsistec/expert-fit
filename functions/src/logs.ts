/* eslint-disable require-jsdoc */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * Copyright 2020 Stripe, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const creatingCustomer = (uid: string) => {
  console.log(`⚙️ Creating customer object for [${uid}].`);
};

export const customerCreationError = (error: Error, uid: string) => {
  console.error(
      `❗️[Error]: Failed to create customer for [${uid}]:`,
      error.message
  );
};

export const customerDeletionError = (error: Error, uid: string) => {
  console.error(
      `❗️[Error]: Failed to delete customer for [${uid}]:`,
      error.message
  );
};

export function customerCreated(id: string, livemode: boolean) {
  console.log(
      `✅Created a new customer: https://dashboard.stripe.com${
      livemode ? "" : "/test"
      }/customers/${id}.`
  );
}


export function customerDeleted(id: string) {
  console.log(`🗑Deleted Stripe customer [${id}]`);
}

export function creatingCheckoutSession(docId: string) {
  console.log(`⚙️ Creating checkout session for doc [${docId}].`);
}

export function checkoutSessionCreated(docId: string) {
  console.log(`✅Checkout session created for doc [${docId}].`);
}

export function checkoutSessionCreationError(docId: string, error: Error) {
  console.error(
      `❗️[Error]: Checkout session creation failed for doc [${docId}]:`,
      error.message
  );
}

export function createdBillingPortalLink(uid: string) {
  console.log(`✅Created billing portal link for user [${uid}].`);
}

export function billingPortalLinkCreationError(uid: string, error: Error) {
  console.error(
      `❗️[Error]: Customer portal link creation failed for user [${uid}]:`,
      error.message
  );
}

export function firestoreDocCreated(collection: string, docId: string) {
  console.log(
      `🔥📄 Added doc [${docId}] to collection [${collection}] in Firestore.`
  );
}

export function firestoreDocDeleted(collection: string, docId: string) {
  console.log(
      `🗑🔥📄 Deleted doc [${docId}] from collection [${collection}] in Firestore.`
  );
}

export function userCustomClaimSet(
    uid: string,
    claimKey: string,
    claimValue: string
) {
  console.log(
      `🚦 Added custom claim [${claimKey}: ${claimValue}] for user [${uid}].`
  );
}

export function badWebhookSecret(error: Error) {
  console.error(
      "❗️[Error]: Webhook signature verification failed. Is your Stripe webhook secret parameter configured correctly?",
      error.message
  );
}

export function startWebhookEventProcessing(id: string, type: string) {
  console.log(`⚙️ Handling Stripe event [${id}] of type [${type}].`);
}

export function webhookHandlerSucceeded(id: string, type: string) {
  console.log(`✅Successfully handled Stripe event [${id}] of type [${type}].`);
}

export function webhookHandlerError(error: Error, id: string, type: string) {
  console.error(
      `❗️[Error]: Webhook handler for  Stripe event [${id}] of type [${type}] failed:`,
      error.message
  );
}

import Stripe from "stripe";
import {InvoicePayload} from "./interfaces";

export function startInvoiceCreate() {
  console.log("🙂 Received new invoice, starting processing");
}

export function startInvoiceUpdate(eventType: string) {
  console.log(
      `🙂 Received new invoice event ${eventType}, starting processing`
  );
}

export function incorrectPayload(payload: InvoicePayload) {
  if (!payload.items.length) {
    console.error(
        new Error("😞[Error] Missing at least one line item in items[]")
    );
  }
  if (!payload.email && !payload.uid) {
    console.error(
        new Error(
            "😞[Error] Missing either a customer email address or Firebase Authentication uid"
        )
    );
  }
  if (payload.email && payload.uid) {
    console.error(
        new Error(
            "😞[Error] Only either email or uid is permitted, you specified both."
        )
    );
  }
}

export function noEmailForUser(uid: string) {
  console.error(
      new Error(`😞[Error] User [${uid}] is missing an email address.`)
  );
}

export function stripeError(err: Stripe.StripeCardError) {
  console.error(
      new Error("😞[Error] Error when making a request to the Stripe API:"),
      err
  );
}

export function invoiceCreatedError(invoice?: Stripe.Invoice) {
  console.error(
      new Error("😞[Error] Error when creating the invoice:"),
      invoice
  );
}


export function customerRetrieved(id: string, livemode: boolean) {
  console.log(
      `🙋 Found existing customer by email: https://dashboard.stripe.com${
      livemode ? "" : "/test"
      }/customers/${id}`
  );
}

export function invoiceCreated(id: string, livemode: boolean) {
  console.log(
      `🧾 Created invoice: https://dashboard.stripe.com${
      livemode ? "" : "/test"
      }/invoices/${id}`
  );
}

export function invoiceSent(
    id: string,
    email: string,
    hostedInvoiceUrl: string
) {
  console.log(`📧 Sent invoice ${id} to ${email}: ${hostedInvoiceUrl}`);
}

export function badSignature(err: Error) {
  console.error(
      "😞[Error] Webhook signature verification failed. Is your Stripe webhook secret parameter configured correctly?",
      err
  );
}

export function malformedEvent(event: Stripe.Event) {
  let err;

  if (!event?.data?.object) {
    err = new Error("Could not find event.data.object");
  } else if (!event?.type) {
    err = new Error("Could not find event.type");
  }

  console.error("😞[Error] Malformed event", err);
}

export function ignoreEvent(eventType: string) {
  console.log(
      `🙈 Ignoring event "${eventType}" because it because it isn't a relevant part of the invoice lifecycle`
  );
}

export function unexpectedInvoiceAmount(
    numInvoices: number,
    invoiceId: string
) {
  console.error(
      "😞[Error] could not find invoice",
      new Error(
          `Expected 1 invoice with ID "${invoiceId}", but found ${numInvoices}`
      )
  );
}

export function statusUpdateComplete(
    invoiceId: string,
    newStatus: string,
    eventType: string
) {
  console.log(
      `🙂 Updated invoice "${invoiceId}" to status "${newStatus}" on event type "${eventType}"`
  );
}

