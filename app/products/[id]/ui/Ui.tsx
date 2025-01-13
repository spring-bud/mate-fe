'use client';

import { useEffect } from 'react';
import { useProductStore } from '@/store/useProductStore';
import MainContent from '../sections/MainContent';
import Profile from '../sections/Profile';
import Reviews from '../sections/Reviews';
import { ProductDetail, Review } from '@/types/products/Products';

interface Props {
  initialData: ProductDetail;
  initialReviews: Review[];
}

export default function Ui({ initialData, initialReviews }: Props) {
  const setProduct = useProductStore((state) => state.setProduct);

  useEffect(() => {
    setProduct(initialData);
  }, [initialData, setProduct]);

  return (
    <div className="flex justify-center min-w-[1024px]">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* 좌측: 프로필 */}
          <div className="col-span-3">
            <div className="sticky top-4">
              <Profile />
            </div>
          </div>

          {/* 중앙: 메인 콘텐츠 & 리뷰 */}
          <div className="col-span-9">
            <div className="space-y-12">
              <MainContent />
              <Reviews initialReviews={initialReviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
