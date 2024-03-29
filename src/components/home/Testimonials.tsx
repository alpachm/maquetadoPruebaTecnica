import "./../styles/testimonialsStyles.css";
import {
  testimonialItem,
  testimonialText,
} from "../../locales/testimonial-locales";
import ActiveStarIcon from "../icons/ActiveStarIcon";
import img1 from "./../../assets/testimonials/testimonial_img.png";
import img2 from "./../../assets/testimonials/testimonial_img_2.png";

const Testimonials = () => {
  return (
    <div className="testimonial_container">
      <div className="testimonial_img">
        <img src={img1} alt="foodi testimonial" />
      </div>

      <div className="testimonial_content">
        <h4 className="top_subtitle">{testimonialText.topTitle}</h4>
        <h2 className="subtitle">{testimonialText.title}</h2>
        <p className="paragraph">{`"${testimonialText.text}"`}</p>
        <footer>
          <img src={img2} alt="" />
          <section>
            <h4 className="card_title">{testimonialItem.title}</h4>
            <div>
              <ActiveStarIcon />
              <p>{testimonialItem.rate}</p>
              <span className="card_text">{`(${testimonialItem.reviews})`}</span>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Testimonials;
