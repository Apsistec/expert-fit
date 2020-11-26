import { Employee } from './employees.model';
import { MarketingCampaign } from './marketing-campaigns.model';
import { User } from './users.model';

export interface Lead {
  leadId: string;
  employeeId?: Employee;
  name?: string;
  phone?: string;
  email?: string;
  uid?: User;
  referrerId?: User;
  campaigns?: MarketingCampaign[];
  message?: string;
  createdAt: string;
  lastUpdatedAt: string;
  lastUpdatedBy: string;
}
