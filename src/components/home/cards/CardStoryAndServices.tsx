import "./../../styles/cardStoryAndServicesStyles.css";

interface IData {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  data: IData;
}

const CardStoryAndServices = ({ data }: Props) => {
  return (
    <div className="cardStoryAndServices_container">
      <img src={data.icon} alt={data.title} />
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </div>
  );
};

export default CardStoryAndServices;
