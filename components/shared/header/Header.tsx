// components/smart/Header/index.tsx
'use client';

import { Button } from '@/components/ui/button';
import CustomImage from '@/utils/customImage/CustomImage';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Header() {
  return (
    <div className="w-full border-b border-gray-800 bg-black">
      <div className="max-w-[1920px] mx-auto px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* 왼쪽: 로고 */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <CustomImage src="/images/logo/Logo.png" alt="logo" height={40} width={40} className="cursor-pointer" />
              <p className="text-white text-2xl">Mate</p>
            </div>
          </div>

          {/* 중앙: 검색창 */}
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

          {/* 오른쪽: 로그인 버튼 */}
          <div>
            <Button variant="default" size="default" className="bg-white text-black hover:bg-gray-100 font-medium">
              로그인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
