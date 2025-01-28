import { ProductDetail, Review } from '@/types/products/Products';
import { getMockProductDetail, getMockReviews } from '@/app/products/[id]/Mock';
// import { PRODUCT_API } from './constants';

export const productAPI = {
  getProduct: async (id: string): Promise<ProductDetail> => {
    return getMockProductDetail(); // 현재는 mock 데이터
  },

  getReviews: async (id: string): Promise<Review[]> => {
    return getMockReviews(); // 현재는 mock 데이터
  },
};
