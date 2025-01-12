import { ProductDetail, Review } from '@/types/products/Products';

export const getProductDetail = async (): Promise<ProductDetail> => {
  const mockData: ProductDetail = {
    title: 'Spring Boot Tutorial',
    content: `# Spring Boot 실전 가이드: 백엔드 개발 마스터하기

## 📚 이런 것들을 배우실 수 있습니다
- RESTful API 설계 및 구현
- Spring Security를 활용한 인증/인가
- JPA/Hibernate를 이용한 데이터베이스 연동
- 실제 프로덕션 레벨의 코드 작성법

## 💡 주요 기능 구현 예시

### 1. REST API 구현
\`\`\`java
@RestController
@RequestMapping("/api/v1")
public class ProductController {
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts() {
        // 상품 목록을 반환하는 로직
        return ResponseEntity.ok(productService.findAll());
    }
}
\`\`\`

### 2. 데이터베이스 연동
\`\`\`java
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    // getter, setter
}
\`\`\`

## 🔥 구매하시면 받는 혜택
1. 소스코드 전체 제공
2. 1개월 무료 기술 지원
3. 실시간 질의응답
4. 코드 리뷰 2회 제공

## 💪 이런 분들께 추천드립니다
- Spring Boot로 실제 서비스를 구현하고 싶으신 분
- 클린 코드 작성법을 배우고 싶으신 분
- JPA, Spring Security 실전 활용법을 익히고 싶으신 분
- MSA 아키텍처에 대해 궁금하신 분

## 🎯 최종 목표
실제 서비스에서 사용되는 수준의 Spring Boot 애플리케이션을 개발할 수 있는 능력을 갖추실 수 있습니다.

### 코드 예시: 서비스 레이어 구현
\`\`\`java
@Service
@Transactional(readOnly = true)
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Transactional
    public Product createProduct(ProductDto dto) {
        // 비즈니스 로직 구현
    }
}
\`\`\`

문의사항이 있으시다면 언제든 연락 주세요. 성공적인 프로젝트 구현을 위해 도와드리겠습니다! 🚀`,
    category: {
      category: 'DEVELOP',
    },
    status: 'ACTIVE',
    product_tags: [
      {
        tag_id: 1,
        name: 'Spring',
      },
      {
        tag_id: 2,
        name: 'Java',
      },
      {
        tag_id: 3,
        name: 'Backend',
      },
    ],
    owner: {
      user_id: 2,
      nickname: 'newNickname2222',
      profile_url: 'http://example.com/profile.jpg',
    },
    count: {
      like_count: 0,
      review_count: 2,
    },
    is_liked: false,
  };

  return mockData;
};

// 리뷰 Mock 데이터 생성 함수
export const getMockReviews = async (): Promise<Review[]> => {
  const mockReviews: Review[] = [
    {
      user_id: 1,
      user_profile_url: 'http://example.com/user1.jpg',
      star: 4.0,
      content: '좋습니다!',
    },
    {
      user_id: 2,
      user_profile_url: 'http://example.com/user2.jpg',
      star: 5.0,
      content: '정말 훌륭한 개발자입니다',
    },
  ];

  return mockReviews;
};
