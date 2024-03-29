import { infoItems, infoText } from "../../locales/info-locales";
import Logo from "../header/Logo";
import "./../styles/infoStyles.css";

export const Info = () => {
  return (
    <div className="info_container">
      <section>
        <Logo />
        <p className="paragraph">{infoText}</p>
      </section>

      {infoItems.map((data) => (
        <section>
          <h4>{data.title}</h4>
          {data.items.map((link) => (
            <a href="#">{link}</a>
          ))}
        </section>
      ))}
    </div>
  );
};
