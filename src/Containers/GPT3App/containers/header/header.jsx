import "./header.styles.scss";
import { NavLink } from "react-router-dom";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { headerText } from "../../helperfiles/data";

export default function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{headerText.bodyA}</h1>
        <p>{headerText.bodyB}</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <NavLink to="/SignUpForm">
            <button type="button">{headerText.bodyC}</button>
          </NavLink>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="image not found" />
          <p>{headerText.bodyD}</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="image not found" />
      </div>
    </div>
  );
}
