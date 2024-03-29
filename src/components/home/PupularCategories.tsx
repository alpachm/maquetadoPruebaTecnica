import {
  popularCategoriesItems,
  titles,
} from "../../locales/pupularCategories-locales";
import "./../styles/popularCategoriesStyles.css";
import CardPopularCategories from "./cards/CardPopularCategories";

const PupularCategories = () => {
  return (
    <div className="popularCategories_container">
      <div className="titles_container">
        <h4 className="top_subtitle">{titles.topTitle}</h4>
        <h2 className="subtitle">{titles.title}</h2>
      </div>

      <div className="cards_popularCategories_container">
        {popularCategoriesItems.map((data) => (
          <CardPopularCategories data={data} key={data.title} />
        ))}
      </div>
    </div>
  );
};

export default PupularCategories;
