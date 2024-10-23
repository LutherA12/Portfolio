import React from "react";
import { Link } from "react-router-dom";
import "./articles.styles.scss";

export default function PointArticle() {
  return (
    <div className="gradient__bg articles-point articles">
      <h3>Is there a point to any of this?</h3>
      <p>
        I'm glad you asked! The point is very simple, to help people. It may
        sound corny, contrived & cliche but it's true! Helping people is the
        main objective of this journey.
        <br />
        <br />
        If we dare to ask people to trust us, why would we not offer to help?
        How can we not serve people? It doesn't make any sense to us not to help
        people. Again, it may sound fake but that's how this started & how we've
        always been.
        <br />
        <br />
        <Link to="/GPT3App" className="articles-home-link">
          <button type="button" className="article-buttons">
            Take me home!
          </button>
        </Link>
      </p>
    </div>
  );
}
