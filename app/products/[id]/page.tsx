import { Suspense } from 'react';
import { getProductDetail, getMockReviews } from './Mock';
import Ui from './ui/Ui';
// import Loading from './loading';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const [productData, reviewsData] = await Promise.all([getProductDetail(), getMockReviews()]);

  return (
    <Suspense>
      <Ui initialData={productData} initialReviews={reviewsData} />
    </Suspense>
  );
}
