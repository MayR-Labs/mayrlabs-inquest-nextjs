import { BaseService } from '@/lib/services/base';
import { IAuthService } from './interface';
import * as admin from 'firebase-admin';
import { env } from '@/lib/env';

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

    // Initialize admin app if not already initialized
    if (!admin.apps.length) {
      if (env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        try {
          const serviceAccount = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT_KEY);
          admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
          });
        } catch (e) {
          console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY', e);
          // Fallback to default auth if available or just proceed (migth fail later)
          admin.initializeApp({
            projectId: this.projectId,
          });
        }
      } else {
        // Fallback or dev mode initialization
        admin.initializeApp({
          projectId: this.projectId,
        });
      }
    }
  }

  async verifyToken(token: string): Promise<string> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      return decodedToken.uid;
    } catch (error) {
      console.error('Error verifying Firebase token:', error);
      throw error;
    }
  }
}
