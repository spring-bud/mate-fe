import { Suspense } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { productAPI } from '@/service/product/api';
import { QUERY_KEYS } from '@/service/product/constants';
import Ui from './ui/Ui';
import { ProductDetail, Review } from '@/types/products/Products';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  // 서버 데이터 프리페칭
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.product.detail(params.id),
      queryFn: () => productAPI.getProduct(params.id),
    }),
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.product.reviews(params.id),
      queryFn: () => productAPI.getReviews(params.id),
    }),
  ]);

  // 캐시된 데이터 가져오기
  const productData = queryClient.getQueryData<ProductDetail>(QUERY_KEYS.product.detail(params.id));
  const reviewsData = queryClient.getQueryData<Review[]>(QUERY_KEYS.product.reviews(params.id));

  // 타입가드 에러처리
  if (!productData || !reviewsData) {
    throw new Error('Failed to fetch data');
  }

  return (
    <Suspense>
      <Ui productData={productData} reviewsData={reviewsData} />
    </Suspense>
  );
}
