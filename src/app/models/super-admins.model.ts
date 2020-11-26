import { Employee } from './employees.model';

export interface SuperAdmin {
  superUserId: string;
  employeeId: Employee;
  createdAt: string;
}
