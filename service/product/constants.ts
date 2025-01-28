export const PRODUCT_API = {
  GET_PRODUCT: (id: string) => `/api/products/${id}`,
  GET_REVIEWS: (id: string) => `/api/products/${id}/reviews`,
} as const;

export const QUERY_KEYS = {
  product: {
    detail: (id: string) => ['product', 'detail', id],
    reviews: (id: string) => ['product', 'reviews', id],
  },
} as const;
