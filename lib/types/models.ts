import { Types } from 'mongoose';

export type UserRole = 'user' | 'admin';
export type FormStatus = 'draft' | 'active' | 'locked' | 'disabled';

export interface IUser {
  _id?: Types.ObjectId | string;
  email: string;
  provider_details: Record<string, unknown>; // e.g., { firebase: { uid: '...', ... } }
  role: UserRole;
  last_activity: Date;
  onboarded_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IForm {
  _id?: Types.ObjectId | string;
  title: string;
  description?: string;
  schema: Record<string, unknown>; // JSON schema for the form fields
  status: FormStatus;
  submit_message?: string;
  recipients: string[]; // List of emails allowed to access/manage
  created_by: Types.ObjectId | string | IUser;
  created_at: Date;
  updated_at: Date;
}

export interface IFormResponse {
  _id?: Types.ObjectId | string;
  form_id: Types.ObjectId | string | IForm;
  user_id: Types.ObjectId | string | IUser;
  answers: Record<string, unknown>;
  submitted_at: Date;
}
