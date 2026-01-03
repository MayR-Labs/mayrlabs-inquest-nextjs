import { ServiceConfigError } from '@/lib/errors/ServiceConfigError';

export interface IService {
  validateConfig(): void;
}

export abstract class BaseService implements IService {
  abstract name: string;
  abstract validateConfig(): void;

  protected requireConfig(key: string, errorCode: string): string {
    const value = process.env[key];
    if (!value) {
      throw new ServiceConfigError(this.name, key, errorCode);
    }
    return value;
  }
}
