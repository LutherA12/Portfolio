import "./header.styles.scss";
import { NavLink } from "react-router-dom";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

export default function Header() {
  const text = {
    bodyA: "Let's Build Something Amazing with GPT-3 OpenAI!!",
    bodyB: (
      <>
        {" "}
        Have you ever been excited about something? Silly question right? We all
        have! What excites us the most is what we call GPT-3 an extremely
        intelligent AI system that will be the next big thing! We know you've
        visited this site for a reason and since you're here please allow us to
        make it worth your time!
      </>
    ),
    bodyC: "Get Started!",
    bodyD:
      "We've had at least 1,600 people request access and visit our site in the last 24 hours",
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{text.bodyA}</h1>
        <p>{text.bodyB}</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <NavLink to="/SignUpForm">
            <button type="button">{text.bodyC}</button>
          </NavLink>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="image not found" />
          <p>{text.bodyD}</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="image not found" />
      </div>
    </div>
  );
}
