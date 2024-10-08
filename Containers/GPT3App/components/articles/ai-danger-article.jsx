import { NavLink } from "react-router-dom";
import "./articles.styles.scss";

export default function AiDangerArticle() {
  return (
    <div className="gradient__bg articles-danger">
      <h3>Be careful of Skynet!</h3>
      <p>
        Don't take us too seriously, we are only kidding! <br />
        <br /> Dangerous AI is a very real thing, however, the sheer amount of
        checks and balances we have in place to avoid the Terminator movies is
        quite absurd. <br />
        <br /> Furthermore, movies while entertaining do stretch the truth on
        many different occations which in turn is why they are so entertaining,
        no one wants to watch a movie about real life, it's boring! <br />
        <br /> AI in real life is very similar, mostly really boring and not
        trying to take over the world. AI is sophisticated just not in that way,
        it doesn't work quite how you may imagine. At best AI is a simple helper
        that gives you an output based on your input but rest assured, humanity
        will always be the brains behind any machine. <br />
        <br />
      </p>
      <NavLink to="/GPT3App" className="articles-home-link">
        Take me home!
      </NavLink>
    </div>
  );
}
