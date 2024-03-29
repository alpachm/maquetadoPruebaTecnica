import { Info } from "../components/home/Info";
import Main from "../components/home/Main";
import PupularCategories from "../components/home/PupularCategories";
import SpecialDishes from "../components/home/SpecialDishes";
import StoryAndServices from "../components/home/StoryAndServices";
import Testimonials from "../components/home/Testimonials";

const HomeScreen = () => {
  return (
    <div>
      <Main />
      <PupularCategories />
      <SpecialDishes />
      <Testimonials />
      <StoryAndServices />
      <Info />
    </div>
  );
};

export default HomeScreen;
