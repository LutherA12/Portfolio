import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cards } from "../../HelperFiles/Data";
import "./CardCarousel.styles.scss";

export default function CardCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [cardHover, setCardHover] = useState(false);
  const [cardText, setCardText] = useState("");

  let timeOut = null;

  /* useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRightHandler();
      }, 3000);
  }); */

  const slideRightHandler = () => {
    setCurrent(current === cards.length - 1 ? 0 : current + 1);
  };

  const slideLeftHandler = () => {
    setCurrent(current === 0 ? cards.length - 1 : current - 1);
  };

  const mouseEnterCarousel = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  const mouseLeaveCarousel = () => {
    setAutoPlay(true);
  };

  const text = (
    <NavLink to="/GPT3App" className="gpt3-card-link card-links">
      {" "}
      GPT3 is a full landing page that I've added functionallity to since the
      initial design. I did a bit of research on chat gpt & wrote the blogs as
      coherently as I could if you're in the mood for some light reading, but
      please take them with a grain of salt as I've added my own flair to them.
      On the technical side, the buttons now take you to a sign in page, the
      articles are clickable links that contain text as formentioned & the
      navbar moves you to different portions of the page while the home link
      will bring you back here.
    </NavLink>
  );

  const mouseEnterCard = () => {
    setCardHover(true);
    /**    setCardText(
      cards.map((cards, index) => {
        return <div key={index}>{cards.text}</div>;
      })
    ); */
  };

  const mouseLeaveCard = () => {
    setCardHover(false);
    setCardText("");
  };

  return (
    <div
      className="carousel"
      onMouseEnter={mouseEnterCarousel}
      onMouseLeave={mouseLeaveCarousel}
    >
      <div className="carousel-container">
        {cards.map((cards, index) => {
          return (
            <div
              className={
                index == current
                  ? "carousel-cards carousel-cards-active"
                  : "carousel-cards"
              }
              key={index}
            >
              <img
                className={"carousel-card-image"}
                src={cards.image}
                alt="img not found"
              />
              <div
                onMouseEnter={mouseEnterCard}
                onMouseLeave={mouseLeaveCard}
                className={cardHover == true ? "card-hover-overlay" : ""}
              >
                <h2 className="card-description">{cardText}</h2>
              </div>
            </div>
          );
        })}
        <div
          className="carousel-left-arrow carousel-arrows"
          onClick={slideLeftHandler}
        >
          &lsaquo;
        </div>
        <div
          className="carousel-right-arrow carousel-arrows"
          onClick={slideRightHandler}
        >
          &rsaquo;
        </div>
        <div className="carousel-pages">
          {cards.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "carousel-pages-dots carousel-pages-dots-active"
                    : "carousel-pages-dots"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
