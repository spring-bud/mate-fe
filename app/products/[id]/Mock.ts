import { ProductDetail, Review } from '@/types/products/Products';

export const getProductDetail = async (): Promise<ProductDetail> => {
  const mockData: ProductDetail = {
    title: 'Spring Boot Tutorial',
    content: `# 웹/앱 풀스택 개발 서비스: 아이디어를 현실로 만들어드립니다

## 🌟 주요 서비스 내용
현직 네카라쿠배 시니어 개발자가 여러분의 프로젝트를 완벽하게 구현해드립니다.

### 💡 이런 프로젝트를 수행할 수 있습니다
* **웹 서비스 개발**
  - SaaS 플랫폼 개발
  - 기업 홈페이지 제작
  - 관리자 대시보드 구축
  - 커머스 플랫폼 개발
* **모바일 앱 개발**
  - 하이브리드 앱 개발
  - 네이티브 앱 개발
  - 크로스 플랫폼 앱 개발
* **백엔드 시스템 구축**
  - API 서버 개발
  - 데이터베이스 설계
  - 클라우드 인프라 구축
  - 성능 최적화

## 📚 기술 스택

> "최신 기술 스택을 활용하여 안정적이고 확장 가능한 서비스를 구축합니다"

1. 프론트엔드
   - React/Next.js
   - TypeScript
   - Tailwind CSS
   - React Native

2. 백엔드
   - Node.js/Express
   - Spring Boot
   - NestJS
   - PostgreSQL/MongoDB

3. 클라우드/인프라
   - AWS/GCP
   - Docker/Kubernetes
   - CI/CD
   - 모니터링 시스템

## 💻 개발 예시 코드

### API 엔드포인트 예시
\`\`\`tsx
interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

@Controller('users')
export class UsersController {
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    // 사용자 조회 로직
    return this.usersService.findById(id);
  }

  @Post()
  async createUser(@Body() userData: CreateUserDto): Promise<User> {
    // 사용자 생성 로직
    return this.usersService.create(userData);
  }
}
\`\`\`

### 프론트엔드 컴포넌트 예시
\`\`\`jsx
const DashboardCard = ({ title, value, trend }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <div className="flex items-center mt-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className={\`ml-2 \${trend > 0 ? 'text-green-500' : 'text-red-500'}\`}>
          {trend}%
        </span>
      </div>
    </div>
  );
};
\`\`\`

## 📊 프로젝트 진행 단계

| 단계 | 기간 | 산출물 |
|------|------|--------|
| 기획 | 1주 | 요구사항 정의서, 기능 명세서 |
| 설계 | 1주 | 시스템 설계서, DB 스키마 |
| 개발 | 4-8주 | 소스코드, API 문서 |
| 테스트 | 1주 | 테스트 결과보고서 |
| 배포 | 1주 | 배포 완료된 서비스 |

## 🎯 가격 정책

### 기본 패키지
- __웹 서비스 개발__: 800만원부터
- __앱 개발__: 1,000만원부터
- __풀스택 개발__: 1,500만원부터

## ✨ 포함된 서비스

1. 상세한 기획 및 설계 문서
2. 소스코드 및 기술 문서
3. 3개월 무상 유지보수
4. 배포 및 운영 가이드
5. 관리자 교육

## 🤝 협업 방식
* 주 1회 정기 미팅 (온/오프라인)
* 수시 커뮤니케이션 (슬랙/디스코드)
* 주간 개발 보고서 제공
* 깃허브를 통한 코드 리뷰
* 테스트 서버 수시 배포

### ⚠️ 유의사항
> 프로젝트의 규모와 복잡도에 따라 개발 기간과 비용이 조정될 수 있습니다.
> 기능 추가 및 변경 시 별도 협의가 필요합니다.

## 📞 문의하기
프로젝트 관련 문의는 아래 링크를 통해 연락주세요.

[프로젝트 문의하기](https://example.com/contact)

## 🏆 주요 수행 프로젝트

* __A 기업 ERP 시스템 구축__
  - Spring Boot 기반 백엔드 개발
  - React 기반 프론트엔드 개발
  - AWS 클라우드 인프라 구축
  - 2000만원 / 3개월 소요

* __B 스타트업 커머스 플랫폼 개발__
  - Next.js 기반 웹 서비스 개발
  - NestJS 기반 API 서버 개발
  - 결제/정산 시스템 연동
  - 1500만원 / 2개월 소요

## 🛠️ 기술 지원 범위

1. **프로젝트 기획 및 분석**
   - 요구사항 분석 및 정의
   - 시스템 아키텍처 설계
   - DB 설계 및 최적화

2. **개발 및 구현**
   - 프론트엔드/백엔드 개발
   - API 설계 및 구현
   - 테스트 코드 작성

3. **배포 및 운영**
   - CI/CD 파이프라인 구축
   - 클라우드 인프라 설정
   - 모니터링 시스템 구축

---

*마지막 업데이트: 2024년 1월 15일*`,
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
      {
        tag_id: 4,
        name: 'Frontend',
      },
      {
        tag_id: 5,
        name: 'React',
      },
      {
        tag_id: 6,
        name: 'Next.js',
      },
      {
        tag_id: 7,
        name: 'MongoDB',
      },
      {
        tag_id: 8,
        name: 'Vue.js',
      },
      {
        tag_id: 9,
        name: 'Angular',
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
