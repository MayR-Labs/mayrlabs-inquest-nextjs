// scripts/verify-persistence.ts
import { getDatabaseService } from '../lib/services';
import User from '../lib/models/User';
import Form from '../lib/models/Form';
import FormResponse from '../lib/models/FormResponse';
import { IUser, IForm } from '../lib/types/models';
import dotenv from 'dotenv';

dotenv.config();

async function run() {
  console.log('🔄 Connecting to Database...');
  const db = getDatabaseService();
  await db.connect();

  try {
    // 1. Create a Test User
    console.log('\n📝 Testing: Create User');
    const email = `test-${Date.now()}@example.com`;
    const user = await User.create({
      email,
      provider_details: { firebase: { uid: 'test-uid' } },
      role: 'admin',
    });
    console.log('   ✅ User created:', user._id);

    // 2. Create a Form
    console.log('\n📝 Testing: Create Form');
    const form = await Form.create({
      title: 'Test Form',
      description: 'A test form',
      schema: { question: 'What is your name?' },
      created_by: user._id,
      recipients: [email],
    });
    console.log('   ✅ Form created:', form._id);

    // 3. Create a Response
    console.log('\n📝 Testing: Submit Response');
    const response = await FormResponse.create({
      form_id: form._id,
      user_id: user._id,
      answers: { answer: 'John Doe' },
    });
    console.log('   ✅ Response created:', response._id);

    // 4. Verify Relations
    console.log('\n🔍 Verifying Relationships...');
    const fetchedResponse = await FormResponse.findById(response._id)
      .populate('user_id')
      .populate('form_id');

    if (fetchedResponse && fetchedResponse.user_id && fetchedResponse.form_id) {
      const user = fetchedResponse.user_id as unknown as IUser;
      const form = fetchedResponse.form_id as unknown as IForm;

      if (user.email === email && form.title === 'Test Form') {
        console.log('   ✅ Relationships verified');
      } else {
        console.error('   ❌ Relationship mismatch');
      }
    } else {
      console.error('   ❌ Failed to populate');
    }

    // Cleanup
    console.log('\n🧹 Cleaning up...');
    await FormResponse.deleteOne({ _id: response._id });
    await Form.deleteOne({ _id: form._id });
    await User.deleteOne({ _id: user._id });
    console.log('   ✅ Cleanup complete');
  } catch (error) {
    console.error('❌ Verification Failed:', error);
    process.exit(1);
  } finally {
    await db.disconnect();
    process.exit(0);
  }
}

run();
