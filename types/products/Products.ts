// 태그 인터페이스
export interface ProductTag {
  tag_id: number;
  name: string;
}

// 사용자 인터페이스
export interface User {
  user_id: number;
  nickname: string;
  profile_url: string;
}

// 카운트 인터페이스
export interface Count {
  like_count: number;
  review_count: number;
}

// 카테고리
export interface Category {
  category: 'DEVELOP' | 'DESIGN';
}

// 리뷰 인터페이스
export interface Review {
  user_id: number;
  user_profile_url: string;
  star: number;
  content: string;
}

// 메인 데이터 인터페이스
export interface ProductDetail {
  title: string;
  content: string;
  category: Category;
  status: 'ACTIVE' | 'INACTIVE';
  product_tags: ProductTag[];
  owner: User;
  count: Count;
  is_liked: boolean;
}
