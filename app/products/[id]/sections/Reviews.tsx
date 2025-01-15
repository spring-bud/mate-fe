'use client';

import { Star } from 'lucide-react';
import CustomImage from '@/utils/customImage/CustomImage';
import { Review } from '@/types/products/Products';
import { ProductDetail } from '@/types/products/Products';

interface ReviewCardProps {
  userProfileUrl: string;
  star: number;
  content: string;
}

function ReviewCard({ userProfileUrl, star, content }: ReviewCardProps) {
  return (
    <div className="bg-[#1E2227] rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <CustomImage src={userProfileUrl} alt="user profile" width={40} height={40} className="rounded-full" />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={`${i < star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300 whitespace-pre-line">{content}</p>
    </div>
  );
}

interface Props {
  product: ProductDetail;
  reviews: Review[];
}
export default function Reviews({ product, reviews }: Props) {
  if (!product || !reviews.length) return null;

  // 평균 별점 계산
  const averageRating = reviews.reduce((acc, review) => acc + review.star, 0) / reviews.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Reviews ({product.count.review_count})</h2>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 font-bold text-xl">{averageRating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${i < Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.user_id}
            userProfileUrl={review.user_profile_url}
            star={review.star}
            content={review.content}
          />
        ))}
      </div>
    </div>
  );
}
