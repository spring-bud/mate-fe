import { basicAPI } from '@/lib/axios/baiscApi';
import { authAPI } from '@/lib/axios/authApi';
import { ENDPOINTS } from './constants';
import { useUserStore } from '@/store/userStore';
import { baseURL } from '@/lib/axios/defaultConfig';

interface ReissueResponse {
  access_token: string;
}

interface LogoutResponse {
  message: string;
}

export const userApi = {
  getKakaoLogin: () => {
    return `${baseURL}${ENDPOINTS.AUTH.KAKAO}`;
  },

  postReissue: async (): Promise<ReissueResponse> => {
    try {
      console.log('Attempting to reissue token');
      const response = await basicAPI.post<ReissueResponse>(ENDPOINTS.AUTH.REISSUE, {});

      console.log('Reissue response:', response.data);

      if (response.data.access_token) {
        console.log('Setting new access token');
        useUserStore.getState().setUser(response.data.access_token);
      }

      return response.data;
    } catch (error) {
      console.error('Reissue API error:', error);
      throw error;
    }
  },

  logout: async (): Promise<LogoutResponse> => {
    try {
      const response = await authAPI.post<LogoutResponse>(ENDPOINTS.AUTH.LOGOUT, {});

      // 로그아웃 성공 시 상태 초기화
      useUserStore.getState().clearUser();

      return response.data;
    } catch (error) {
      console.error('Logout API error:', error);
      throw error;
    }
  },
};
