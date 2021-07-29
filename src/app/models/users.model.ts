export interface User {
  uid: string;
  displayName?: string;
  email: string;
  role?: string[]; // USER, ADMIN, EMPLOYEE, CUSTOMER
  photoURL?: string;
  emailVerified?: boolean;
  providerId?: string;
  phoneNumber?: string;
  permissions?: string[];
  ratings?: string[];
  hashTags?: string[];
  whereFrom?: string;
  subId?: string;
  createdAt?: any;
  lastUpdatedAt?: any;
  stripeStatus?: string; // current, trialing, past-due, cancelled, needs-payment
  stripeRole?: string; // basic, premium, platinum
  profile?: any;
  signInMethod?: string;
  username?: string;
  isNewUser?: boolean;
  providerData?: any;
  fcmTokens?: { [token: string]: true };
}
