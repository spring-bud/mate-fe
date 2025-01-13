'use client';

import { useProductStore } from '@/store/useProductStore';
import Preview from '@/components/common/editor/Preview';

export default function MainContent() {
  const product = useProductStore((state) => state.product);

  if (!product) return null;

  return (
    <div className="bg-[#1E2227] rounded-lg overflow-hidden">
      <div className="border-b border-gray-700 p-6">
        <h1 className="text-2xl font-bold text-white">{product.title}</h1>
      </div>
      <Preview content={product.content} className="min-h-[600px]" />
    </div>
  );
}
