import { Employee } from './employees.model';

export interface Admin {
  adminId: string;
  permissions: string[];
  employeeId: Employee;
  status: string;
  createdDate: number;
  createdBy: Employee;
  createdAt: string;
  lastUpdatedAt: string;
  lastUpdatedBy: Employee;
}
