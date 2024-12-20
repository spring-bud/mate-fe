'use client';

import { Button } from '@/components/ui/button';
import CustomImage from '@/utils/customImage/CustomImage';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  const [isSlideActive, setIsSlideActive] = useState(false);

  const handleSlide = () => {
    setIsSlideActive(!isSlideActive);
  };
  return (
    <div className="relative h-[570px] overflow-hidden bg-symbol mt-8">
      {/* First Section Content */}
      <div
        className={`absolute w-1/2 h-full transition-all duration-700 ease-in-out ${
          isSlideActive ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
        }`}
      >
        <div className="flex flex-col justify-center h-full gap-6 text-white p-10">
          <h1 className="font-black text-5xl">
            Quick Contact,
            <br /> Quick Start!
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl"
          >
            Mate에서 다양한 프리랜서와 빠르게 여러분의 프로젝트를 시작하세요!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button className="w-40 bg-white text-black hover:bg-white/90" onClick={handleSlide}>
              시작하기
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className={`absolute right-0 w-1/2 h-full transition-all duration-700 ease-in-out ${
          isSlideActive ? '-translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
        }`}
      >
        <CustomImage
          src="/images/banner.png"
          alt="banner"
          width={500}
          height={500}
          className="w-full h-[500px] object-cover rounded-sm p-4"
        />
      </motion.div>

      {/* Second Section Content */}
      <div
        className={`absolute left-0 w-1/2 h-full transition-all duration-700 ease-in-out ${
          isSlideActive ? '-translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <CustomImage
          src="/images/banner2.png"
          alt="banner"
          width={500}
          height={500}
          className="w-full h-[500px] object-cover rounded-sm p-4"
        />
      </div>

      <div
        className={`absolute right-0 w-1/2 h-full transition-all duration-700 ease-in-out ${
          isSlideActive ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center items-end h-full gap-6 text-white p-10">
          <h1 className="font-black text-5xl">
            No Fees, <br /> No Limit!
          </h1>
          <p className="text-2xl">Mate는 프리랜서와 이용자들에게 어떠한 수수료도, 제한도 없습니다!</p>
          <Button className="w-40 bg-white text-black hover:bg-white/90" onClick={handleSlide}>
            이전으로
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
