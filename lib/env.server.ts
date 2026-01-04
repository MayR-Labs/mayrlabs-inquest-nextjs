import { z } from 'zod';

const serverSchema = z.object({
  FIREBASE_SERVICE_ACCOUNT_KEY: z.string().optional(),

  GEMINI_API_KEY: z.string().optional(),

  MONGODB_URI: z.string().optional(),
  MONGODB_DBNAME: z.string().optional(),

  OPENAI_API_KEY: z.string().optional(),

  SUPABASE_URL: z.string().optional(),
  SUPABASE_KEY: z.string().optional(),

  // Private Variables
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

export const serverEnv = serverSchema.parse(process.env);
