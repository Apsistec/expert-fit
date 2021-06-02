export interface Price {
  active: boolean;
  currency: string;
  interval: string;
  tiers?: string;
  trial_period_days?: number;
  type: string;
  unit_amount: number;
  description?: string;
}
