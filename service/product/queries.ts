import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './constants';
import { productAPI } from './api';
import { ProductDetail, Review } from '@/types/products/Products';

export const useProductDetail = (id: string, initialData?: ProductDetail) => {
  return useQuery({
    queryKey: QUERY_KEYS.product.detail(id),
    queryFn: () => productAPI.getProduct(id),
    initialData,
  });
};

export const useProductReviews = (id: string, initialData?: Review[]) => {
  return useQuery({
    queryKey: QUERY_KEYS.product.reviews(id),
    queryFn: () => productAPI.getReviews(id),
    initialData,
  });
};
