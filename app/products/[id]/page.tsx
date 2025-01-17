// ProductPage.tsx
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { productAPI } from '@/service/product/api';
import { QUERY_KEYS } from '@/service/product/constants';
import Ui from './ui/Ui';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  if (!params?.id) {
    throw new Error('params.id is required but missing');
  }

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

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Ui productId={params.id} />
    </HydrationBoundary>
  );
}
