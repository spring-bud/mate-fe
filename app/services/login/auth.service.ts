import basicApi from '@/lib/axios/basic';
import authApi from '@/lib/axios/auth';

// 개발 환경에서 쿠키 설정을 위한 함수
const setDevRefreshToken = (token: string) => {
  // localhost:3000에서 사용할 수 있도록 도메인 설정
  document.cookie = `refresh_token=${token}; path=/; domain=localhost; secure; samesite=strict`;
};

export const authService = {
  login: () => basicApi.get('/oauth2/authorization/kakao'),

  logout: () => authApi.post('/api/v1/auth/logout'),

  // 개발 환경에서 토큰 세팅을 위한 메서드 추가
  setToken: (token: string) => {
    setDevRefreshToken(token);
  },

  reissue: async () => {
    const res = await basicApi.post(
      '/api/v1/auth/reissue',
      {},
      {
        withCredentials: true,
      }
    );
    return res.data;
  },
};
