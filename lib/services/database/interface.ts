import { IService } from '@/lib/services/base';
import { IUser, IForm, IFormResponse } from '@/lib/types/models';

export interface IDatabaseService extends IService {
  name: string;

  connect(): Promise<void>;
  disconnect(): Promise<void>;

  // User Operations
  createUser(
    user: Omit<IUser, '_id' | 'created_at' | 'updated_at' | 'last_activity'>,
  ): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser | null>;
  updateUser(id: string, updates: Partial<IUser>): Promise<IUser | null>;

  // Form Operations
  createForm(form: Omit<IForm, '_id' | 'created_at' | 'updated_at'>): Promise<IForm>;
  getFormById(id: string): Promise<IForm | null>;
  getFormsByUser(userId: string): Promise<IForm[]>;
  updateForm(id: string, updates: Partial<IForm>): Promise<IForm | null>;

  // Response Operations
  createResponse(response: Omit<IFormResponse, '_id' | 'submitted_at'>): Promise<IFormResponse>;
  getResponsesForForm(formId: string): Promise<IFormResponse[]>;

  // Cleanup Operations
  deleteUser(id: string): Promise<boolean>;
  deleteForm(id: string): Promise<boolean>;
  deleteResponse(id: string): Promise<boolean>;
}
