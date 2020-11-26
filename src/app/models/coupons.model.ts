import { MarketingCampaign } from './marketing-campaigns.model';

export interface Coupon {
  couponId: string;
  name: string;
  value: number;
  expires?: number;
  campaignId?: MarketingCampaign[];
  createdAt: string;
  createdBy: string;
}
