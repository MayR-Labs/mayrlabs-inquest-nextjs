import { BaseService } from '../base';
import { IAuthService } from './interface';

export class FirebaseAuthService extends BaseService implements IAuthService {
  name = 'FirebaseAuthService';

  validateConfig(): void {
    this.requireConfig('NEXT_PUBLIC_FIREBASE_API_KEY', 'ERR_AUTH_FIREBASE_API_KEY_MISSING');
    this.requireConfig('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', 'ERR_AUTH_FIREBASE_AUTH_DOMAIN_MISSING');
    this.requireConfig('NEXT_PUBLIC_FIREBASE_PROJECT_ID', 'ERR_AUTH_FIREBASE_PROJECT_ID_MISSING');
  }
}
