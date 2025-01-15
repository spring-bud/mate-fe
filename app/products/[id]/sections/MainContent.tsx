'use client';

import Preview from '@/components/common/editor/Preview';
import Image from 'next/image';
import { ProductDetail } from '@/types/products/Products';

interface Props {
  product: ProductDetail;
}

export default function MainContent({ product }: Props) {
  const BookmarkIcon = () => (
    <svg width="30" height="38" viewBox="0 0 24 32" fill="none" className="absolute top-0 right-4">
      <path d="M0 0H24V32L12 24L0 32V0Z" fill="#FFC107" />
    </svg>
  );

  if (!product) return null;

  const getCategoryIcon = () => {
    const category = product.category.category.toLowerCase();
    if (category === 'design') {
      return '/images/category/design_icon.svg';
    }
    return '/images/category/dev_icon.svg';
  };

  return (
    <div className="bg-[#1E2227] rounded-lg overflow-hidden relative">
      <div className="border-b border-gray-700 p-6">
        <BookmarkIcon />
        <div className="flex items-center justify-center gap-3">
          <Image src={getCategoryIcon()} alt="category icon" width={24} height={24} className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-white">{product.title}</h1>
        </div>
      </div>
      <Preview content={product.content} className="min-h-[600px]" />
    </div>
  );
}
