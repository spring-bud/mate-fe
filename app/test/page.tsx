import Header from '@/components/shared/header/Header';
import Banner from './components/Banner';
import { PopularProduct } from './components/PopularProduct';
import Category from './components/Category';

export default function Home() {
  return (
    <div className="container h-[3000px]">
      <Header />
      <Banner />
      <PopularProduct />
      <Category />
    </div>
  );
}