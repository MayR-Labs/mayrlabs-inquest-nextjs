import dotenv from 'dotenv';
import { getDatabaseService } from '@/lib/services';

dotenv.config();

async function run() {
  console.log('🔄 Connecting to Database...');

  const db = getDatabaseService();
  await db.connect();

  let userId: string | undefined;
  let formId: string | undefined;
  let responseId: string | undefined;

  try {
    // 1. Create a Test User
    console.log('\n📝 Testing: Create User via Service');

    const email = `test-${Date.now()}@example.com`;

    const user = await db.createUser({
      email,
      provider_details: { firebase: { uid: 'test-uid' } },
      role: 'admin',
    });

    userId = user._id?.toString();

    console.log('   ✅ User created:', userId);

    if (!userId) throw new Error('User ID missing');

    // 2. Create a Form
    console.log('\n📝 Testing: Create Form via Service');

    const form = await db.createForm({
      title: 'Test Form',
      description: 'A test form',
      schema: { question: 'What is your name?' },
      created_by: userId,
      recipients: [email],
      status: 'draft',
      submit_message: 'Thanks!',
    });

    formId = form._id?.toString();

    console.log('   ✅ Form created:', formId);

    if (!formId) throw new Error('Form ID missing');

    // 3. Create a Response
    console.log('\n📝 Testing: Submit Response via Service');

    const response = await db.createResponse({
      form_id: formId,
      user_id: userId,
      answers: { answer: 'John Doe' },
    });

    responseId = response._id?.toString();

    console.log('   ✅ Response created:', responseId);

    // 4. Verify Fetch (Abstraction check)
    console.log('\n🔍 Verifying Fetch...');

    const fetchedUser = await db.getUserByEmail(email);

    if (fetchedUser && fetchedUser._id?.toString() === userId) {
      console.log('   ✅ Fetched User verified');
    } else {
      console.error('   ❌ User fetch failed');
    }

    const fetchedForm = await db.getFormById(formId);

    if (fetchedForm && fetchedForm.title === 'Test Form') {
      console.log('   ✅ Fetched Form verified');
    } else {
      console.error('   ❌ Form fetch failed');
    }

    // Cleanup skipped as requested/not strictly needed for dev verification script
    console.log('\n⚠️ Note: Cleanup skipped (delete methods not in Service Interface)');
  } catch (error) {
    console.error('❌ Verification Failed:', error);

    process.exit(1);
  } finally {
    await db.disconnect();

    process.exit(0);
  }
}

run();
