import { useState } from "react";
import "./../../styles/cardSpecialDishesStyles.css";
import ActiveStarIcon from "../../icons/ActiveStarIcon";

interface IData {
  img: string;
  title: string;
  description: string;
  price: number;
  rate: string;
}

interface Props {
  data: IData;
}

const CardSpecialDishes = ({ data }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="card_specialDishes_container">
      <div
        onClick={() => setIsFavorite(!isFavorite)}
        className="favorite_button"
      >
        {isFavorite ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </div>

      <img src={data.img} alt={data.title} />

      <section className="content_card_specialDishes">
        <h4 className="card_title">{data.title}</h4>
        <p className="card_text">{data.description}</p>
      </section>

      <footer>
        <p>
          <span>$</span>
          {data.price}.00
        </p>
        <span>
          <ActiveStarIcon />
          {data.rate}
        </span>
      </footer>
    </div>
  );
};

export default CardSpecialDishes;
