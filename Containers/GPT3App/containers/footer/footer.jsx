import "./footer.styles.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <NavLink to="/SignUpForm">
          <button type="button">Request Early Access</button>
        </NavLink>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="image not found" />
          <p>Obscure GPT3 141 Main St, Citytown, USA, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overrons</p>
          <p>Social Media</p>
          <p>Counters</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>About Us</p>
        </div>

        <div className="gpt3__footer-get_in_touch">
          <h4>Get In Touch</h4>
          <p>141 Main St, Citytown, USA</p>
          <p>1-800-123-4567</p>
          <p>gpt3@info.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>&copy; 2021 GPT-3 All Rights Reserved</p>
      </div>
    </div>
  );
}
