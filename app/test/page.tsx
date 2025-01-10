import Header from '@/components/shared/header/Header';
import Banner from './components/Banner';
import { PopularProduct } from './components/PopularProduct';
import Category from './components/Category';
import PopularUserProfile from './components/PopularUserProfile';
import Footer from '@/components/shared/footer/Footer';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <PopularProduct />
      <Category />
      <PopularUserProfile />
      <Footer />
    </div>
  );
}
