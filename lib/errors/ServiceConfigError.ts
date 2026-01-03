export class ServiceConfigError extends Error {
  public errorCode: string;
  public serviceName: string;
  public missingVar: string;

  constructor(serviceName: string, missingVar: string, errorCode: string) {
    super(`Service Configuration Error: [${serviceName}] Missing ${missingVar} (${errorCode})`);
    this.name = 'ServiceConfigError';
    this.serviceName = serviceName;
    this.missingVar = missingVar;
    this.errorCode = errorCode;
  }
}
