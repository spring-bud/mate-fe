'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useUserStore } from '@/store/userStore';
import { userApi } from '@/service/auth/api';

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

interface AuthContextType {
  status: AuthStatus;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// providers/AuthProvider.tsx
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('loading');
  const { isAuthenticated } = useUserStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();

        if (data.isAuthenticated) {
          // 토큰이 있으면 재발급 시도해서 유저 정보 받아오기
          await userApi.postReissue();
          setStatus('authenticated');
        } else {
          setStatus('unauthenticated');
        }
      } catch {
        setStatus('unauthenticated');
      }
    };

    if (!isAuthenticated) {
      checkAuth();
    } else {
      setStatus('authenticated');
    }
  }, [isAuthenticated]);

  return <AuthContext.Provider value={{ status }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
