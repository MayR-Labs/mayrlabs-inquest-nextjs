import mongoose from 'mongoose';
import { BaseService } from '../base';
import { IDatabaseService } from './interface';

export class MongoDBDatabaseService extends BaseService implements IDatabaseService {
  name = 'MongoDBDatabaseService';

  validateConfig(): void {
    this.requireConfig('MONGODB_URI', 'ERR_DB_MONGO_URI_MISSING');
  }

  async connect(): Promise<void> {
    const uri = this.requireConfig('MONGODB_URI', 'ERR_DB_MONGO_URI_MISSING');

    // 1 = connected, 2 = connecting
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    try {
      await mongoose.connect(uri);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}
