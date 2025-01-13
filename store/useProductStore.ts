import { create } from 'zustand';
import { ProductDetail } from '@/types/products/Products';

interface ProductStore {
  product: ProductDetail | null;
  setProduct: (product: ProductDetail) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
}));
