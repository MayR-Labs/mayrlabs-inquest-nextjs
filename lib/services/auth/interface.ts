import { IService } from '@/lib/services/base';

export interface IAuthService extends IService {
  name: string;

  verifyToken(token: string): Promise<string>; // Returns UID
}
