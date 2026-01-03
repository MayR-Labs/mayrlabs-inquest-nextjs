import mongoose from 'mongoose';
import { BaseService } from '../base';
import { IDatabaseService } from './interface';

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
    await mongoose.disconnect();
  }
}
