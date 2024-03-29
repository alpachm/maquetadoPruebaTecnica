import "./../styles/footerStyles.css";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { text } from "../../locales/footer-locales";

const Footer = () => {
  const socialNetworksIcons: JSX.Element[] = [
    <FacebookIcon color="#fff" />,
    <InstagramIcon color="#484848" />,
    <TwitterIcon color="#484848" />,
    <YoutubeIcon color="#484848" />,
  ];

  return (
    <div className="footer_container">
      <div className="socialNetwork_container">
        {socialNetworksIcons.map((item) => (
          <div>{item}</div>
        ))}
      </div>

      <p>{text}</p>
    </div>
  );
};

export default Footer;
