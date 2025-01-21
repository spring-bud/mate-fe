'use client';

import { Card, CardContent } from '@/components/ui/card';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Link from 'next/link';
import { userApi } from '@/service/auth/api';

const Ui = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      {/* Logo Area */}
      <div className="w-24 h-24 bg-slate-800 rounded-full mb-6 flex items-center justify-center">
        <div className="w-16 h-16 bg-black rounded-full"></div>
      </div>

      <h1 className="text-white text-4xl font-bold mb-2">MATE</h1>

      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col gap-6 items-center pt-6">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-white text-3xl font-semibold mb-2">Quick Contact, Quick Start</h2>
            <p className="text-slate-400 text-sm">빠르고 간편한 시작을 경험하세요</p>
          </div>

          <Link href={userApi.getKakaoLogin()}>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <RiKakaoTalkFill className="text-xl" />
              카카오로 3초만에 시작하기
            </button>
          </Link>

          <p className="text-slate-500 text-xs font-bold">카카오 계정으로 간편하게 시작해보세요</p>
        </CardContent>
      </Card>

      <footer className="mt-8 text-slate-600 text-xs">© 2024 All rights reserved.</footer>
    </div>
  );
};

export default Ui;
