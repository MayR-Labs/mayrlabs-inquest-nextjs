import { IService } from '../base';

export interface IAuthService extends IService {
  name: string;

  // Add auth methods as needed, e.g. verifyToken(token: string): Promise<User>;
}
