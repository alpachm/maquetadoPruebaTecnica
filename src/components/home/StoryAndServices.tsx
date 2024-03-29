import "./../styles/storyAndServicesStyles.css";
import {
  storyAndServicesItems,
  storyAndServicesText,
} from "../../locales/storyAndServices-locales";
import PrimaryButton from "../shared/PrimaryButton";
import CardStoryAndServices from "./cards/CardStoryAndServices";

const StoryAndServices = () => {
  return (
    <div className="storyAndServices_container">
      <section className="storyAndServices_textContent">
        <h4 className="top_subtitle">{storyAndServicesText.topTitle}</h4>
        <h2 className="subtitle">{storyAndServicesText.title}</h2>
        <p className="paragraph">{storyAndServicesText.text}</p>
        <PrimaryButton label={storyAndServicesText.buttonText} width="215px" />
      </section>

      <section className="cardsStoryAndServices_container">
        {storyAndServicesItems.map((data) => (
          <CardStoryAndServices data={data} />
        ))}
      </section>
    </div>
  );
};

export default StoryAndServices;
