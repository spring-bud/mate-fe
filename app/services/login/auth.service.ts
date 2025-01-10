import basicApi from '@/lib/axios/basic';
import authApi from '@/lib/axios/auth';

export const authService = {
  login: () => basicApi.get('/oauth2/authorization/kakao'),

  logout: () => authApi.post('/auth/logout'),

  refreshToken: () => authApi.post('/auth/refresh'),
};
