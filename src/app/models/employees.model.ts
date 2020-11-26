import { User } from 'src/app/_models/users.model';
import { Customer } from './customers.model';
import { GymSession } from './gym-sessions.model';
import { GymLocation } from './gym-locations.model';

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
