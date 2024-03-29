import "./../styles/specialDishesStyles.css";
import {
  specialDishesItems,
  titles,
} from "../../locales/specialDishes-locales";
import CardSpecialDishes from "./cards/CardSpecialDishes";

const SpecialDishes = () => {
  return (
    <div className="specialDishes_container">
      <div className="topContent_specialDishes">
        <div className="specialDishes_titles_container">
          <h4 className="top_subtitle">{titles.topTile}</h4>
          <h2 className="subtitle">{titles.title}</h2>
        </div>

        <section className="buttons_specialDishes_container">
          <div>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </section>
      </div>

      <div className="cards_specialDishes_container">
        {specialDishesItems.map((data) => (
          <CardSpecialDishes data={data} />
        ))}
      </div>
    </div>
  );
};

export default SpecialDishes;
