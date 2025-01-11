'use client';

import CustomImage from '@/utils/customImage/CustomImage';
import { useRef } from 'react';
import DevIcon from '@/public/images/category/dev_icon.svg';
import DesignIcon from '@/public/images/category/design_icon.svg';
import { motion, useInView } from 'framer-motion';

interface Props {
  image: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  delay: number;
}

const CategoryCard = ({ image, icon: Icon, title, description, delay }: Props) => {
  return (
    <motion.div
      className="relative w-1/2 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative rounded-2xl overflow-hidden">
        <div className="aspect-[16/10]">
          <CustomImage
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="flex items-center gap-4 mb-3">
            <Icon className="w-12 h-12 text-white" />
            <h2 className="text-white text-4xl font-extrabold">{title}</h2>
          </div>
          <p className="text-white/90 text-xl bg-black/60 rounded-xl h-8 px-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Category = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-250px' });

  const categories = [
    {
      image: '/images/category/dev.png',
      icon: DevIcon,
      title: '개발',
      description: '웹, 앱, 서버 개발 등 모든 개발 서비스',
    },
    {
      image: '/images/category/design.png',
      icon: DesignIcon,
      title: '디자인',
      description: 'UI/UX, 그래픽, 브랜딩 등 모든 디자인 서비스',
    },
  ];

  return (
    <section className="border-t-2 py-12" ref={ref}>
      <motion.div
        className="flex flex-col gap-4 items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-3xl font-bold">카테고리</h1>
        <p className="text-white">필요한 서비스를 찾아보세요</p>
      </motion.div>

      {isInView && (
        <div className="flex gap-8 px-24">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} delay={0.3 + index * 0.2} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;
