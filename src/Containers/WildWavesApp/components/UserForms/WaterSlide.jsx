import { useState } from "react";
import { utils, minHeight, globalPrompt } from "../../helpers/Data";
import "./Forms.Styles.scss";

export default function WaterSlide() {
  const [isSlideAllowed, setIsSlideAllowed] = useState(``);
  const [enterHeight, setEnterHeight] = useState(``);
  const [enterAdult, setEnterAdult] = useState(``);

  const { verifyChar, verifyNum, maxChar, timeout, yes } = utils;
  const { slide, minRideHeight } = minHeight;
  const {
    allowedSlideA,
    allowedSlideB,
    deniedSlide,
    deniedAll,
    ask_user_height,
    ask_user_with_adult,
    slide_button,
    syntax_error,
  } = globalPrompt;

  const slideVerification = (enterHeight, enterAdult) => {
    if (enterHeight >= slide) {
      setIsSlideAllowed(allowedSlideA);
    } else if (
      enterHeight < slide &&
      enterHeight > minRideHeight &&
      yes.includes(enterAdult)
    ) {
      setIsSlideAllowed(allowedSlideB);
    } else if (enterHeight < minRideHeight) {
      setIsSlideAllowed(deniedAll);
    } else {
      setIsSlideAllowed(deniedSlide);
    }
  };

  const slideClickHandler = () => {
    {
      enterHeight.match(verifyNum) && enterAdult.match(verifyChar)
        ? slideVerification(enterHeight, enterAdult)
        : setIsSlideAllowed(syntax_error);
    }

    setTimeout(() => {
      setIsSlideAllowed(isSlideAllowed);
    }, timeout);
  };

  const waterSlideInfo = [
    <button
      type="button"
      className="slide-button choice-buttons"
      onClick={slideClickHandler}
    >
      {slide_button}
    </button>,

    <input
      type="text"
      className="slide-height input-fields"
      onChange={(e) => setEnterHeight(e.target.value)}
      value={enterHeight}
      placeholder={ask_user_height}
      maxLength={maxChar}
    />,
    <input
      type="text"
      className="slide-adult input-fields"
      onChange={(e) => setEnterAdult(e.target.value)}
      value={enterAdult}
      placeholder={ask_user_with_adult}
      maxLength={maxChar}
    />,
  ];

  return (
    <div className="water-slide-container attraction-containers">
      {waterSlideInfo.map((info, index) => {
        return <div key={index}>{info}</div>;
      })}
      <h5 className="slide-display-field display-fields">{isSlideAllowed}</h5>
    </div>
  );
}
