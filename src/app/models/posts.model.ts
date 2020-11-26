import { User } from './users.model';

export interface Post {
  postId: string;
  uid: User;
  header: string;
  subHeader?: string;
  tags?: string[];
  message: string;
  audienceId: User[];
  createdAt: string;
  lastUpdatedAt: string;
  lastUpdatedBy: string;
}
