import "./../styles/logoStyles.css";
import F from "./../../assets/logo/F.png";
import oodi from "./../../assets/logo/oodi.png";

const Logo = () => {
  return (
    <div className="logo_container">
      <div className="f_logo_container">
        <img className="f_logo" src={F} alt="foodi_logo" />
      </div>
      <img className="oodi_logo" src={oodi} alt="foodi_logo" />
    </div>
  );
};

export default Logo;
