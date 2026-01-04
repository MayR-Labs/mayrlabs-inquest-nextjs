import { BaseService } from '@/lib/services/base';
import { IDatabaseService } from './interface';
import mongoose from 'mongoose';
import { IUser, IForm, IFormResponse } from '@/lib/types/models';
import MongooseUser from '@/lib/models/mongoose/User';
import MongooseForm from '@/lib/models/mongoose/Form';
import MongooseFormResponse from '@/lib/models/mongoose/FormResponse';

export class MongoDBDatabaseService extends BaseService implements IDatabaseService {
  name = 'MongoDBDatabaseService';

  private uri: string = '';
  private dbName: string = '';

  validateConfig(): void {
    this.uri = this.requireConfig('MONGODB_URI', 'ERR_DB_MONGO_URI_MISSING');
    this.dbName = this.requireConfig('MONGODB_DBNAME', 'ERR_DB_MONGO_DBNAME_MISSING');
  }

  async connect(): Promise<void> {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    try {
      await mongoose.connect(this.uri, {
        bufferCommands: false,
        dbName: this.dbName,
      });

      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  }

  // --- User Operations ---

  async createUser(
    userData: Omit<IUser, '_id' | 'created_at' | 'updated_at' | 'last_activity'>,
  ): Promise<IUser> {
    const user = await MongooseUser.create(userData);
    return user.toObject();
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await MongooseUser.findOne({ email }).lean();
    return user as IUser | null;
  }

  async updateUser(id: string, updates: Partial<IUser>): Promise<IUser | null> {
    const user = await MongooseUser.findByIdAndUpdate(id, updates, { new: true }).lean();
    return user as IUser | null;
  }

  // --- Form Operations ---

  async createForm(formData: Omit<IForm, '_id' | 'created_at' | 'updated_at'>): Promise<IForm> {
    const form = await MongooseForm.create(formData);
    return form.toObject();
  }

  async getFormById(id: string): Promise<IForm | null> {
    const form = await MongooseForm.findById(id).lean();
    return form as IForm | null;
  }

  async getFormsByUser(userId: string): Promise<IForm[]> {
    const forms = await MongooseForm.find({ created_by: userId }).lean();
    return forms as IForm[];
  }

  async updateForm(id: string, updates: Partial<IForm>): Promise<IForm | null> {
    const form = await MongooseForm.findByIdAndUpdate(id, updates, { new: true }).lean();
    return form as IForm | null;
  }

  // --- Response Operations ---

  async createResponse(
    responseData: Omit<IFormResponse, '_id' | 'created_at' | 'updated_at'>,
  ): Promise<IFormResponse> {
    const response = await MongooseFormResponse.create(responseData);
    return response.toObject();
  }

  async getResponsesForForm(formId: string): Promise<IFormResponse[]> {
    const responses = await MongooseFormResponse.find({ form_id: formId }).lean();
    return responses as IFormResponse[];
  }

  // --- Cleanup Operations ---

  async deleteUser(id: string): Promise<boolean> {
    const result = await MongooseUser.findByIdAndDelete(id);
    return !!result;
  }

  async deleteForm(id: string): Promise<boolean> {
    const result = await MongooseForm.findByIdAndDelete(id);
    return !!result;
  }

  async deleteResponse(id: string): Promise<boolean> {
    const result = await MongooseFormResponse.findByIdAndDelete(id);
    return !!result;
  }
}
