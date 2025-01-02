import Banner from './components/Banner';
import { PopularProduct } from './components/PopularProduct';
import Category from './components/Category';
import PopularUserProfile from './components/PopularUserProfile';

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <PopularProduct />
      <Category />
      <PopularUserProfile />
    </div>
  );
}
