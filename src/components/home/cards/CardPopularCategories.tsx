import "./../../styles/cardPopularCategoriesStyles.css";

interface IData {
  title: string;
  amount: string;
  icon: string;
  width: string;
}

interface Props {
  data: IData;
}

const CardPopularCategories = ({ data }: Props) => {
  return (
    <div className="card_popularCategories_container">
      <div className="popularCategories_img_container">
        <img style={{ width: data.width }} src={data.icon} alt={data.title} />
      </div>
      <h4 className="card_title">{data.title}</h4>
      <p className="card_text">{`(${data.amount})`}</p>
    </div>
  );
};

export default CardPopularCategories;
