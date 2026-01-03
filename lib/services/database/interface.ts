import { IService } from '../base';

export interface IDatabaseService extends IService {
  name: string;

  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
