'use client';

import Link from 'next/link';

// 통계 데이터 객체
const statistics = {
  totalUsers: 1234,
  totalProjects: 5678,
  averageRating: 4.9,
};

// 메뉴 데이터
const footerMenus = {
  company: {
    title: '회사소개',
    items: [
      { label: '소개', href: '/about' },
      { label: '블로그', href: '/blog' },
    ],
  },
  customerService: {
    title: '고객지원',
    items: [
      { label: '자주 묻는 질문', href: '/faq' },
      { label: '이용가이드', href: '/guide' },
      { label: '문의하기', href: '/contact' },
    ],
  },
  terms: {
    title: '이용약관',
    items: [
      { label: '이용약관', href: '/terms' },
      { label: '개인정보처리방침', href: '/privacy' },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-gray-400 py-12 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-32">
          {/* 회사소개 */}
          <div>
            <p className="text-white mb-4">{footerMenus.company.title}</p>
            <div className="flex flex-col gap-3">
              {footerMenus.company.items.map((item, index) => (
                <Link key={index} href={item.href} className="hover:text-gray-300 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 고객지원 */}
          <div>
            <p className="text-white mb-4">{footerMenus.customerService.title}</p>
            <div className="flex flex-col gap-3">
              {footerMenus.customerService.items.map((item, index) => (
                <Link key={index} href={item.href} className="hover:text-gray-300 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 이용약관 */}
          <div>
            <p className="text-white mb-4">{footerMenus.terms.title}</p>
            <div className="flex flex-col gap-3">
              {footerMenus.terms.items.map((item, index) => (
                <Link key={index} href={item.href} className="hover:text-gray-300 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 통계 */}
          <div>
            <p className="text-white mb-4">통계</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
                    fill="currentColor"
                  />
                </svg>
                <span>전문가 수: {statistics.totalUsers.toLocaleString()}명</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>프로젝트 수: {statistics.totalProjects.toLocaleString()}개</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <span>평균 만족도: {statistics.averageRating}/5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p>© 2024 개발자 외주 플랫폼. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
