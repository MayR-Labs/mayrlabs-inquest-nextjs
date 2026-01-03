import { ServiceConfigError } from '@/lib/errors/ServiceConfigError';
import { getDatabaseService, getAIService, getAuthService } from '../lib/services';

try {
  console.log('Verifying Services...\n');

  console.log('1. Database Service...');
  const db = getDatabaseService();
  console.log(`   ✅ Success: ${db.name}`);

  console.log('2. AI Service...');
  const ai = getAIService();
  console.log(`   ✅ Success: ${ai.name}`);

  console.log('3. Auth Service...');
  const auth = getAuthService();
  console.log(`   ✅ Success: ${auth.name}`);

  console.log('\nAll services verified successfully!');
} catch (error: unknown) {
  console.error('\n❌ Service Verification Failed:');

  if (error instanceof ServiceConfigError) {
    console.error(`   Code: ${error.errorCode}`);
    console.error(`   Service: ${error.serviceName}`);
    console.error(`   Missing: ${error.missingVar}`);
  } else {
    console.error(error);
  }

  process.exit(1);
}
