import { NavLink } from "react-router-dom";
import "./articles.styles.scss";

export default function BreakingArticle() {
  return (
    <div className="gradient__bg articles-breaking articles">
      <h3>There are no chains on me!</h3>
      <p>
        AI has come a long way. In the past AI was overly complex to develop &
        manage, absurdly difficult to learn, almost useless to use & had no real
        potential to get any better. In other words, it was almost a total loss.
        <br />
        <br />
        That all changed when computers started becoming more sophisticated &
        smaller with the invention of the processor chip. We could now see
        potential where there was none before! Practicality & cost efficiancy
        became a reality!
        <br />
        <br />
        <NavLink to="/GPT3App" className="articles-home-link">
          Take me home!
        </NavLink>
      </p>
    </div>
  );
}
