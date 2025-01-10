import Banner from './sections/Banner';
import { PopularProduct } from './sections/PopularProduct';
import Category from './sections/Category';
import PopularUserProfile from './sections/PopularUserProfile';

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
