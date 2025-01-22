import { baseURL } from '@/lib/axios/defaultConfig';
import { ENDPOINTS } from './constants';
import { basicAPI } from '@/lib/axios/baiscApi';
import { useUserStore } from '@/store/userStore';

interface ReissueResponse {
  access_token: string;
}

export const userApi = {
  getKakaoLogin: () => {
    return `${baseURL}${ENDPOINTS.AUTH.KAKAO}`;
  },

  postReissue: async (): Promise<ReissueResponse> => {
    try {
      const response = await basicAPI.post<ReissueResponse>(
        ENDPOINTS.AUTH.REISSUE,
        {},
        {
          withCredentials: true,
        }
      );

      if (response.data.access_token) {
        // access_token으로 변경
        useUserStore.getState().setUser(response.data.access_token);
      }

      return response.data;
    } catch (error) {
      console.error('Reissue API error:', error);
      throw error;
    }
  },
};
