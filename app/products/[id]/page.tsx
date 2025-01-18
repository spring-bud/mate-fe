import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { productAPI } from '@/service/product/api';
import { QUERY_KEYS } from '@/service/product/constants';
import Ui from './ui/Ui';

type PageParams = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: PageParams }) {
  const { id } = await params;
  const queryClient = new QueryClient();

  if (!id) {
    throw new Error('params.id is required but missing');
  }

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.product.detail(id),
      queryFn: () => productAPI.getProduct(id),
    }),
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.product.reviews(id),
      queryFn: () => productAPI.getReviews(id),
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Ui productId={id} />
    </HydrationBoundary>
  );
}
