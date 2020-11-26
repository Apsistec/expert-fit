import { Employee } from './employees.model';

export interface User {
  uid: string;
  displayName: string;
  email: string;
  role: string;
  permissions: string[];
  photoURL?: string;
  phoneNumber?: number;
  locations?: string[];
  ratings?: string[];
  hashTags?: string[];
  bio?: string;
  whereFrom?: string;
  friends?: User[];
  employeeId?: Employee[];
  subStatus?: string;
  emailVerified?: boolean;
  plan?: string;
  subId?: string;
  createdAt: any;
  lastUpdatedAt?: any;
  stripeId?: string;
}
