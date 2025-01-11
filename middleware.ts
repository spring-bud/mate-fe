// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  console.log('Middleware executed!');
  console.log('Current path:', request.nextUrl.pathname);
  const refreshToken = request.cookies.get('refresh_token');
  console.log('#################', refreshToken);
  // Edge Runtime에서 작동하는 로깅
  console.warn('Middleware executed', {
    url: request.url,
    hasRefreshToken: !!refreshToken,
  });

  if (refreshToken) {
    try {
      const response = await fetch('https://mate-api.springbud.site/api/v1/auth/reissue', {
        method: 'POST',
        headers: {
          Cookie: `refresh_token=${refreshToken.value}`,
        },
      });

      // 응답 상태 로깅
      console.warn('Reissue response:', {
        status: response.status,
        ok: response.ok,
      });
      console.log(response);

      if (response.ok) {
        return NextResponse.next();
      }
    } catch (error) {
      // 에러 로깅
      console.warn('Token reissue failed:', error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
