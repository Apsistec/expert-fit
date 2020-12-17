
export interface User {
  uid: string;
  displayName: string;
  email: string;
  userType: string; // USER, ADMIN, EMPLOYEE, CUSTOMER
  photoURL?: string;
  emailVerified?: boolean;
  providerId?: string;
  phoneNumber?: number;
  permissions?: string[];
  ratings?: string[] ;
  hashTags?: string[];
  bio?: string;
  whereFrom?: string;
  friends?: User[];
  subId?: string;
  createdAt?: any;
  lastUpdatedAt?: any;
  stripeStatus?: string;  // current, trialing, past-due, cancelled, needs-payment
  stripeRole?: string;   // basic, premium, platinum
}
