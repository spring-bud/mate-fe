import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';

interface UserState {
  accessToken: string | null;
  userId: number | null;
  nickname: string | null;
  userUrl: string | null;
  isAuthenticated: boolean;
  status: 'loading' | 'authenticated' | 'unauthenticated';
  setUser: (token: string) => void;
  clearUser: () => void;
  setStatus: (status: 'loading' | 'authenticated' | 'unauthenticated') => void;
  initialize: (isAuthenticated: boolean) => void;
}

interface DecodedToken {
  user_id: number;
  user_url: string;
  user_nickname: string;
  sub: string;
  iat: number;
  exp: number;
}

export const useUserStore = create<UserState>((set) => ({
  accessToken: null,
  userId: null,
  nickname: null,
  userUrl: null,
  isAuthenticated: false,
  status: 'loading',

  setUser: (token: string) => {
    const decoded = jwtDecode<DecodedToken>(token);
    set({
      accessToken: token,
      userId: decoded.user_id,
      nickname: decoded.user_nickname,
      userUrl: decoded.user_url,
      isAuthenticated: true,
      status: 'authenticated',
    });
  },

  clearUser: () => {
    set({
      accessToken: null,
      userId: null,
      nickname: null,
      userUrl: null,
      isAuthenticated: false,
      status: 'unauthenticated',
    });
  },

  setStatus: (status) => {
    set({ status });
  },

  initialize: (isAuthenticated: boolean) => {
    set({
      status: isAuthenticated ? 'authenticated' : 'unauthenticated',
      isAuthenticated,
    });
  },
}));
