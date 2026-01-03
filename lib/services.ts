import { IDatabaseService } from './services/database/interface';
import { MongoDBDatabaseService } from './services/database/mongodb';
import { IAIService } from './services/ai/interface';
import { GeminiAIService } from './services/ai/gemini';
import { IAuthService } from './services/auth/interface';
import { FirebaseAuthService } from './services/auth/firebase';
import { ServiceConfigError } from './errors/ServiceConfigError';

let dbInstance: IDatabaseService | null = null;
let aiInstance: IAIService | null = null;
let authInstance: IAuthService | null = null;

export function getDatabaseService(): IDatabaseService {
  if (dbInstance) return dbInstance;

  const provider = process.env.DB_PROVIDER;

  if (!provider) {
    throw new ServiceConfigError('DatabaseFactory', 'DB_PROVIDER', 'ERR_DB_PROVIDER_MISSING');
  }

  switch (provider) {
    case 'mongodb':
      dbInstance = new MongoDBDatabaseService();
      break;
    default:
      throw new ServiceConfigError(
        'DatabaseFactory',
        'DB_PROVIDER',
        `ERR_DB_PROVIDER_NOT_SUPPORTED: ${provider}`,
      );
  }

  dbInstance.validateConfig();

  console.log(`Database service ${dbInstance.name} initialized successfully.`);

  return dbInstance;
}

export function getAIService(): IAIService {
  if (aiInstance) return aiInstance;

  const provider = process.env.AI_PROVIDER;

  if (!provider) {
    throw new ServiceConfigError('AIFactory', 'AI_PROVIDER', 'ERR_AI_PROVIDER_MISSING');
  }

  switch (provider) {
    case 'gemini':
      aiInstance = new GeminiAIService();
      break;
    case 'openai':
      throw new ServiceConfigError(
        'AIFactory',
        'AI_PROVIDER',
        'ERR_AI_PROVIDER_NOT_IMPLEMENTED_YET',
      );
    default:
      throw new ServiceConfigError(
        'AIFactory',
        'AI_PROVIDER',
        `ERR_AI_PROVIDER_NOT_SUPPORTED: ${provider}`,
      );
  }

  aiInstance.validateConfig();

  console.log(`AI service ${aiInstance.name} initialized successfully.`);

  return aiInstance;
}

export function getAuthService(): IAuthService {
  if (authInstance) return authInstance;

  const provider = process.env.AUTH_PROVIDER;

  if (!provider) {
    throw new ServiceConfigError('AuthFactory', 'AUTH_PROVIDER', 'ERR_AUTH_PROVIDER_MISSING');
  }

  switch (provider) {
    case 'firebase':
      authInstance = new FirebaseAuthService();
      break;
    case 'supabase':
      throw new ServiceConfigError(
        'AuthFactory',
        'AUTH_PROVIDER',
        'ERR_AUTH_PROVIDER_NOT_IMPLEMENTED_YET',
      );
    default:
      throw new ServiceConfigError(
        'AuthFactory',
        'AUTH_PROVIDER',
        `ERR_AUTH_PROVIDER_NOT_SUPPORTED: ${provider}`,
      );
  }

  authInstance.validateConfig();

  console.log(`Auth service ${authInstance.name} initialized successfully.`);

  return authInstance;
}
