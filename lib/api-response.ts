import { NextResponse } from 'next/server';

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: { code: string; message: string; details?: unknown };
};

export function apiResponse<T>(data: T, status = 200) {
  return NextResponse.json<ApiResponse<T>>({ success: true, data }, { status });
}

export function apiError(code: string, message: string, details?: unknown, status = 400) {
  return NextResponse.json<ApiResponse<null>>(
    { success: false, error: { code, message, details } },
    { status },
  );
}
