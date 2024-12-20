'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Mock 데이터 객체
const mockData = {
  imagePath: '/images/mock/PopularSample1.png',
  title: '대학생 과제 솔루션',
  description: '전문가가 과제를 도와드립니다',
  rating: 128,
  price: 50000,
};

const PopularItem = ({ delay }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      <Card className="bg-white/10 border-0">
        <CardContent className="p-0">
          <div className="relative h-72 w-full">
            <Image src={mockData.imagePath} alt={mockData.title} fill className="object-cover rounded-t-lg" />
          </div>
          <div className="p-6 flex flex-col gap-2">
            <h3 className="text-white text-xl font-semibold">{mockData.title}</h3>
            <p className="text-gray-300 text-sm">{mockData.description}</p>
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              <span className="text-gray-300 text-sm ml-1">({mockData.rating}개 리뷰)</span>
            </div>
            <p className="text-white font-bold">₩{mockData.price.toLocaleString()}부터</p>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="default" className="w-full text-white hover:bg-gray-500 border-white h-12">
            상세보기
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const PopularProduct = () => {
  return (
    <section className="border-t-2 py-12">
      <motion.div
        className="flex flex-col gap-4 items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-3xl font-bold">인기 프로덕트</h1>
        <p className="text-white">가장 많은 의뢰가 들어오는 인기 서비스입니다</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <PopularItem delay={0.2} />
        <PopularItem delay={0.4} />
        <PopularItem delay={0.6} />
      </div>
    </section>
  );
};
