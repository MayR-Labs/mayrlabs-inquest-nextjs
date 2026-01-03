import { BaseService } from '../base';
import { IAuthService } from './interface';

export class FirebaseAuthService extends BaseService implements IAuthService {
  name = 'FirebaseAuthService';

  private apiKey: string = '';
  private authDomain: string = '';
  private projectId: string = '';

  validateConfig(): void {
    this.apiKey = this.requireConfig(
      'NEXT_PUBLIC_FIREBASE_API_KEY',
      'ERR_AUTH_FIREBASE_API_KEY_MISSING',
    );
    this.authDomain = this.requireConfig(
      'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
      'ERR_AUTH_FIREBASE_AUTH_DOMAIN_MISSING',
    );
    this.projectId = this.requireConfig(
      'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
      'ERR_AUTH_FIREBASE_PROJECT_ID_MISSING',
    );
  }
}
