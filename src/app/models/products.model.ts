export interface Product {
  active: boolean;
  description: string;
  documentId: string;
  images: any; // string[];
  name: string;
  role: string;
}

export interface Price {
  active?: boolean;
  currency?: string;
  unit_amount?: number;
  description?: string;
  type?: string;
  interval?: string;
  interval_count?: number;
  trial_period_days?: number;
}

export interface Subscription {
  stripeLink?: string;
  role?: string | null;
  quantity?: number;
  product?: any;
  price?: any;
  prices?: any;
  status?: string;
  cancel_at_period_end?: boolean;
  created?: string;
  current_period_start?: string;
  current_period_end?: string;
  ended_at?: string;
  cancel_at?: string;
  cancelled_at?: string;
  trial_start?: string;
  trial_end?: string;
}
