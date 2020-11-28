import { User } from './users.model';
import { Customer } from './customers.model';
import { GymLocation } from './gym-locations.model';
import { GymSession } from './gym-sessions.model';

export interface Employee {
  employeeId: string;
  status: string;
  uid: User;
  hireDate: number;
  hiredBy: Employee;
  revenue?: number;
  terminationDate?: number;
  positions?: string[];
  salesAppointments?: string[];
  gymSessionId?: GymSession[];
  PaidCustomerId?: Customer[];
  payRate?: number;
  gymLocationId?: GymLocation[];
  createdAt?: string;
  lastUpdatedAt?: string;
  lastUpdatedBy?: string;
}
