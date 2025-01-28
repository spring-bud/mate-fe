'use client';

import { Button } from '@/components/ui/button';
import CustomImage from '@/utils/customImage/CustomImage';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useUserStore } from '@/store/userStore';

interface HeaderUiProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => Promise<void>;
}

const HeaderUi = ({ isAuthenticated, onLogin, onLogout }: HeaderUiProps) => {
  const { status, nickname, userUrl } = useUserStore();

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
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2">
                  {status === 'loading' ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
                      <div className="h-4 w-20 bg-gray-700 rounded animate-pulse" />
                    </>
                  ) : (
                    <>
                      <CustomImage src={userUrl} alt="profile" width={32} height={32} className="rounded-full" />
                      <span className="text-white">{nickname}</span>
                    </>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  onClick={onLogout}
                >
                  로그아웃
                </Button>
              </>
            ) : (
              <Button variant="default" className="bg-white text-black hover:bg-gray-100 font-medium" onClick={onLogin}>
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
