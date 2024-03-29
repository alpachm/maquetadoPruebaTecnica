import "./../../styles/cardMainStyles.css";
import ActiveStarIcon from "../../icons/ActiveStarIcon";
import StarIcon from "../../icons/StarIcon";

interface IData {
  title: string;
  stars: number;
  price: number;
  img: string;
}

interface Props {
  data: IData;
}

const CardMain = ({ data }: Props) => {
  const RenderStars = () => {
    const FIVE_STAR = 5;
    let data_stars: JSX.Element[] = [];

    for (let i = 0; i < FIVE_STAR; i++) {
      if (i < data.stars) {
        data_stars.push(<ActiveStarIcon />);
      } else {
        data_stars.push(<StarIcon />);
      }
    }

    return data_stars.map((star) => star);
  };

  return (
    <div className="card_container">
      <img src={data.img} alt="" />
      <div className="cardInfo_container">
        <h4>{data.title}</h4>
        <div className="stars_container">
          <RenderStars />
        </div>
        <h4>
          <span>$</span>
          {data.price}.00
        </h4>
      </div>
    </div>
  );
};

export default CardMain;
