import axios from 'axios';
import { defaultConfig } from './defaultConfig';
import { userApi } from '@/service/auth/api';
import { useUserStore } from '@/store/userStore';

export const authAPI = axios.create(defaultConfig);

authAPI.interceptors.request.use(
  (config) => {
    const accessToken = useUserStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // TODO:
    // - 401 에러로 실패하면, 로그인 페이지로 리다이렉트하는 로직 추가
    // - 리다이렉트 전에 사용자에게 경고 메시지
    return Promise.reject(error);
  }
);

authAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await userApi.postReissue();
        // 실패했던 요청 재시도
        return authAPI(originalRequest);
      } catch (refreshError) {
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
