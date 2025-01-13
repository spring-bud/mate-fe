'use client';

import { useProductStore } from '@/store/useProductStore';
import { Badge } from '@/components/ui/badge';
import CustomImage from '@/utils/customImage/CustomImage';

export default function Profile() {
  const product = useProductStore((state) => state.product);

  if (!product) return null;

  return (
    <div className="bg-[#1E2227] rounded-lg p-8 space-y-8">
      <div className="flex flex-col gap-4 items-center">
        <CustomImage
          src={product.owner.profile_url}
          alt={product.owner.nickname}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{product.owner.nickname}</h3>
        </div>
      </div>
      {/* Tag */}
      <div>
        <h4 className="text-white font-medium text-lg mb-4">Tag</h4>
        <div className="flex flex-wrap gap-2">
          {product.product_tags.map((tag) => (
            <Badge key={tag.tag_id} variant="secondary" className="bg-gray-700 text-gray-200 px-3 py-1">
              {`# ${tag.name}`}
            </Badge>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">리뷰</span>
          <span className="text-white font-medium">{product.count.review_count}개</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">좋아요</span>
          <span className="text-white font-medium">{product.count.like_count}개</span>
        </div>
      </div>
    </div>
  );
}
