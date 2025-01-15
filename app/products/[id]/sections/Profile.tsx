'use client';

import { useProductStore } from '@/store/useProductStore';
import { Badge } from '@/components/ui/badge';
import CustomImage from '@/utils/customImage/CustomImage';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Profile() {
  const product = useProductStore((state) => state.product);

  if (!product) return null;

  const isActive = product.status === 'ACTIVE';

  return (
    <div className="bg-black rounded-[3rem] w-full flex justify-center items-center p-3">
      <div className="relative bg-gray-600 rounded-[3rem] w-full max-w-md overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-32 h-8 mt-2">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-800"></div>
        </div>
        {/* Main Content */}
        <div className="mt-10 p-8 space-y-8">
          <div className="flex flex-col gap-4 items-center">
            {/* 프로필 이미지 컨테이너 */}
            <div
              className={cn(
                'rounded-full p-1',
                isActive ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gray-500'
              )}
            >
              <div className="bg-gray-600 rounded-full p-0.5">
                <CustomImage
                  src={product.owner.profile_url}
                  alt={product.owner.nickname}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{product.owner.nickname}</h3>
              {/* 좋아요 & 리뷰 */}
              <div className="flex justify-between items-center">
                <div
                  className={`${
                    isActive
                      ? 'bg-green-500/20 text-green-500 px-2 py-1 rounded text-sm'
                      : 'bg-red-500/20 text-red-500 px-2 py-1 rounded text-sm'
                  }`}
                >
                  {isActive ? 'ACTIVE' : 'INACTIVE'}
                </div>
                <div className="flex gap-2">
                  <div className="text-white">❤️ 4</div>
                  <div className="text-white">⭐ 9</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tag */}
          <div className="border-t border-white"></div>
          <div>
            <h4 className=" flex gap-2 items-center font-bold text-gray-900 text-lg mb-4">
              <span className="inline-block w-1 h-4 bg-blue-500 rounded-full"></span>
              Tag
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.product_tags.map((tag) => (
                <Badge
                  key={tag.tag_id}
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Chat Button */}
          <div className="flex flex-col items-center gap-4">
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 rounded-full py-6"
              onClick={() => console.log('Start chat')}
            >
              <MessageCircle className="w-5 h-5" />
              채팅 시작하기
            </Button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-4">
          <div className="w-32 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
