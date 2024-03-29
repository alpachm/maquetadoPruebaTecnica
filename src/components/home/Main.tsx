import "./../styles/mainStyles.css";
import { mainCardText, mainText } from "../../locales/main-locales";
import PrimaryButton from "../shared/PrimaryButton";
import PlayIcon from "../icons/PlayIcon";
import mainImg from "./../../assets/main/main-img.png";
import hotSpicy from "./../../assets/main/hot-spicy.png";
import CardMain from "./cards/CardMain";

const Main = () => {
  return (
    <div className="main_container">
      <section>
        <div className="title_container">
          <h1>{mainText.title}</h1>
          <div>
            <h1>{mainText.title2}</h1>
            <h1>{mainText.title3}</h1>
          </div>
        </div>

        <p className="paragraph">{mainText.text}</p>

        <div className="buttons_container">
          <PrimaryButton label={mainText.button} boxShadow />
          <div>
            <span>{mainText.button2}</span>
            <div className="icon_container">
              <PlayIcon />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="img_container">
          <img src={hotSpicy} alt="foodi_hot_spicy" />
          <img src={mainImg} alt="foodi_main_image" />
        </div>
        <div className="cards_container">
          {mainCardText.map((data) => (
            <CardMain data={data} key={data.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
