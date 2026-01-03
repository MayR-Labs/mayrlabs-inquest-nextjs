import { getDatabaseService, getAuthService } from '@/lib/services';
import { apiResponse, apiError } from '@/lib/api-response';

export async function GET() {
  try {
    // 1. Verify Auth Service
    const authService = getAuthService();
    // In a real route, we'd verify the token from headers here
    // const token = req.headers.get('Authorization')?.split('Bearer ')[1];
    // if (!token) return apiError('UNAUTHORIZED', 'No token provided', null, 401);
    // const uid = await authService.verifyToken(token);

    // 2. Verify Database Service
    const dbService = getDatabaseService();
    await dbService.connect();

    return apiResponse({
      message: 'Service Stack Operational',
      services: { auth: authService.name, database: dbService.name },
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    console.error('API Test Error:', error);

    const message = error instanceof Error ? error.message : String(error);

    return apiError('SERVICE_ERROR', 'Failed to verify services', message, 500);
  }
}
