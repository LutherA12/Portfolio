import { NavLink } from "react-router-dom";
import "./articles.styles.scss";

export default function DataArticle() {
  return (
    <div className="gradient__bg articles-data">
      <h3>Let's talk data!</h3>
      <p>
        Information! It's important in all aspects of life and AI is no
        exception, however, the data we retrieve is done a bit differently than
        you might believe.
        <br />
        <br />
        Namely, we don't hold on to your personal search data unless you give us
        permission! It's all written down and available for you to read before
        you sign up, we are an open book and we strive to gain your trust
        directly, transparently, and honestly.
        <br />
        <br />
        <NavLink to="/GPT3App" className="articles-home-link">
          Take me home!
        </NavLink>
      </p>
    </div>
  );
}
