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

export default {
  stripeSecretKey: process.env.STRIPE_API_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  productsCollectionPath: process.env.PRODUCTS_COLLECTION,
  customersCollectionPath: process.env.CUSTOMERS_COLLECTION,
  syncUsersOnCreate: process.env.SYNC_USERS_ON_CREATE === "Do not sync",
  daysUntilDue: Number(process.env.DAYS_UNTIL_DUE_DEFAULT),
  invoicesCollectionPath: process.env.INVOICES_COLLECTION,
};