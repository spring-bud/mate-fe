import { User } from '../user/user';

// 태그 인터페이스
export interface ProductTag {
  tag_id: number;
  name: string;
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
  id: number;
  title: string;
  content: string;
  category: Category;
  status: 'ACTIVE' | 'INACTIVE';
  product_tags: ProductTag[];
  owner: User;
  count: Count;
  is_liked: boolean;
}
