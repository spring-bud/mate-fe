'use client';

import MainContent from '../sections/MainContent';
import Profile from '../sections/Profile';
import Reviews from '../sections/Reviews';
import { ProductDetail, Review } from '@/types/products/Products';

interface Props {
  productData: ProductDetail;
  reviewsData: Review[];
}

export default function Ui({ productData, reviewsData }: Props) {
  return (
    <div className="flex justify-center min-w-[1024px]">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* 좌측: 프로필 */}
          <div className="col-span-3">
            <div className="sticky top-4">
              <Profile product={productData} />
            </div>
          </div>

          {/* 중앙: 메인 콘텐츠 & 리뷰 */}
          <div className="col-span-9">
            <div className="space-y-12">
              <MainContent product={productData} />
              <Reviews product={productData} reviews={reviewsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
