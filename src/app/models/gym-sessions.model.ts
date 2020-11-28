import { Customer } from './customers.model';
import { Employee } from './employees.model';
import { GymLocation } from './gym-locations.model';

export interface GymSession {
  gymSessionId: string;
  dateTime: number;
  paidCustomerId: Customer[];
  gymLocationId: GymLocation;
  status: string;
  employeeId: Employee;
  createdAt: string;
  lastUpdatedAt: string;
  lastUpdatedBy: string;
}
