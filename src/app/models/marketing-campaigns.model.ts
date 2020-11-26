import { Employee } from './employees.model';
import { User } from './users.model';

export interface MarketingCampaign {
  campaignId: string;
  campaignType: string;
  subject: string;
  heading: string;
  subHeading: string;
  message: string;
  imagesURL: string[];
  footer: string;
  createdBy: Employee;
  createdAt?: string;
  lastUpdatedAt: string;
  lastUpdatedBy: Employee;
  recipients?: User[];
}
