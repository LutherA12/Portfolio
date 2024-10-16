import React from "react";
import { Link } from "react-router-dom";
import "./articles.styles.scss";

function Gpt3Article() {
  return (
    <div className="gradient__bg articles-gpt3 articles">
      <h3>Open AI & GPT-3 a match made in Heaven!</h3>
      <p>
        As you may already know chat gpt is an AI system by which you can ask
        any question you want & the AI will filter your data using predetermined
        algorithms in order to get you the best results possible! <br />
        <br />
        GPT-3 is that same process but on steroides! The filtering process is
        much more sophisticated & includes a wealth more information, not to
        mention we've tried hard to take all bias away so that the experience of
        asking a question is always a new one for you & the AI (even if it's the
        same question). There are of course special settings in place if you
        want to change this. How cool is that?!
        <br />
        <br />
        <Link to="/GPT3App" className="articles-home-link">
          Take me home!
        </Link>
      </p>
    </div>
  );
}

export default Gpt3Article;
