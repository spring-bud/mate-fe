'use client';

import { Button } from '@/components/ui/button';
import CustomImage from '@/utils/customImage/CustomImage';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useUserStore } from '@/store/userStore';
import { userApi } from '@/service/auth/api';

const HeaderUi = () => {
  const { status, nickname, userUrl } = useUserStore();

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

  return (
    <div className="w-full border-b border-gray-800 bg-black">
      <div className="max-w-[1920px] mx-auto px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <CustomImage src="/images/logo/Logo.png" alt="logo" height={40} width={40} className="cursor-pointer" />
              <p className="text-white text-2xl">Mate</p>
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
              <Input
                type="text"
                placeholder="프로젝트 검색"
                className="w-full bg-gray-800/50 border-gray-700 text-gray-200 placeholder:text-gray-400 pl-12"
              />
            </div>
          </div>

          <div>
            {status === 'loading' ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
                  <div className="h-4 w-20 bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="w-24 h-9 bg-gray-700 rounded animate-pulse" />
              </div>
            ) : status === 'authenticated' ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CustomImage
                    src={userUrl || '/images/mock/UserProfileSample1.png'}
                    alt="profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-white">{nickname}</span>
                </div>
                <Button
                  variant="outline"
                  size="default"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  onClick={handleLogout}
                >
                  로그아웃
                </Button>
              </div>
            ) : (
              <Button
                variant="default"
                size="default"
                className="bg-white text-black hover:bg-gray-100 font-medium"
                onClick={handleLogin}
              >
                로그인
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUi;
