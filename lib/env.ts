import { z } from 'zod';

const serverSchema = z.object({
  FIREBASE_SERVICE_ACCOUNT_KEY: z.string().optional(),

  GEMINI_API_KEY: z.string().optional(),

  MONGODB_URI: z.string().optional(),
  MONGODB_DBNAME: z.string().optional(),

  OPENAI_API_KEY: z.string().optional(),

  SUPABASE_URL: z.string().optional(),
  SUPABASE_KEY: z.string().optional(),

  // Private Server
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

const clientSchema = z.object({
  // Provider Config
  NEXT_PUBLIC_AI_PROVIDER: z.enum(['gemini', 'openai']).default('gemini'),
  NEXT_PUBLIC_AUTH_PROVIDER: z.enum(['firebase', 'supabase']).default('firebase'),
  NEXT_PUBLIC_DB_PROVIDER: z.enum(['mongodb', 'supabase', 'neon', 'firebase']).default('mongodb'),

  // Firebase Config
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string().optional(),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string().optional(),
});

// Explicitly construct the runtime object so Next.js can inline values
const runtimeEnv = {
  // Server Side
  ...process.env,

  // Client Side need to be defined
  NEXT_PUBLIC_AI_PROVIDER: process.env.NEXT_PUBLIC_AI_PROVIDER,
  NEXT_PUBLIC_AUTH_PROVIDER: process.env.NEXT_PUBLIC_AUTH_PROVIDER,
  NEXT_PUBLIC_DB_PROVIDER: process.env.NEXT_PUBLIC_DB_PROVIDER,
  NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

const envSchema = serverSchema.merge(clientSchema);

export const env = envSchema.parse(runtimeEnv);

export type Env = z.infer<typeof envSchema>;
