import "./../styles/headerStyles.css";
import { contact, menuItems } from "../../locales/header-locales";
import Logo from "../header/Logo";
import BagIcon from "../icons/BagIcon";
import PhoneIcon from "../icons/PhoneIcon";
import SearchIcon from "../icons/SearchIcon";
import { useState } from "react";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const ContactButton = () => {
    return (
      <button>
        <PhoneIcon width={24} height={24} />
        <p>{contact}</p>
      </button>
    );
  };

  return (
    <header>
      <Logo />
      <i
        onClick={() => setIsMenuActive(!isMenuActive)}
        className="fa-solid fa-bars"
      ></i>

      <section className={`navBar ${isMenuActive && "navBar_active"}`}>
        <i
          onClick={() => setIsMenuActive(false)}
          className="fa-solid fa-rectangle-xmark"
        ></i>
        {menuItems.map((item) => (
          <div onClick={() => setIsMenuActive(false)}>
            <a href="">{item.label}</a>
            {item.icon && <i className={item.icon}></i>}
          </div>
        ))}
      </section>

      <section>
        <SearchIcon width={24} height={24} color="#39DB4A" />
        <div>
          <span>8</span>
          <BagIcon width={24} height={24} color="#39DB4A" />
        </div>
        <ContactButton />
      </section>
    </header>
  );
};

export default Header;
