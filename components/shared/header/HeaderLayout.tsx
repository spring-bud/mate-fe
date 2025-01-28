'use client';

import HeaderUi from './Ui';
import { userApi } from '@/service/auth/api';

interface HeaderLayoutProps {
  isAuthenticated: boolean;
}

export default function HeaderLayout({ isAuthenticated }: HeaderLayoutProps) {
  const handleLogin = () => {
    window.location.href = userApi.getKakaoLogin();
  };

  const handleLogout = async () => {
    try {
      await userApi.logout();
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return <HeaderUi isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} />;
}
