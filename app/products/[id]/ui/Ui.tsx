// ui/Ui.tsx
'use client';

import MainContent from '../sections/MainContent';
import Profile from '../sections/Profile';
import Reviews from '../sections/Reviews';
import { useProductDetail, useProductReviews } from '@/service/product/queries';

interface Props {
  productId: string;
}

export default function Ui({ productId }: Props) {
  const { data: productData } = useProductDetail(productId);
  const { data: reviewsData } = useProductReviews(productId);

  if (!productData || !reviewsData) {
    return null;
  }

  return (
    <div className="flex justify-center min-w-[1280px]">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="sticky top-4">
              <Profile product={productData} />
            </div>
          </div>
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
