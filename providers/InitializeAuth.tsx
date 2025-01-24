'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { userApi } from '@/service/auth/api';

interface InitializeAuthProps {
  isAuthenticated: boolean;
}

export default function InitializeAuth({ isAuthenticated }: InitializeAuthProps) {
  const { initialize } = useUserStore();

  useEffect(() => {
    const initAuth = async () => {
      if (isAuthenticated) {
        try {
          // 토큰이 있으면 재발급 시도해서 유저 정보 받아오기
          await userApi.postReissue();
        } catch (error) {
          initialize(false);
        }
      } else {
        initialize(false);
      }
    };

    initAuth();
  }, [isAuthenticated, initialize]);

  return null;
}
