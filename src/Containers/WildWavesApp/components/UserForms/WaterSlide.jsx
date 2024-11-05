import { useState } from "react";
import { utils, minHeight, globalPrompt } from "../../helpers/Data";
import "./Forms.Styles.scss";

export default function WaterSlide() {
  const [isSlideAllowed, setIsSlideAllowed] = useState(``);
  const [enterHeight, setEnterHeight] = useState(``);
  const [enterAdult, setEnterAdult] = useState(``);

  const slideVerification = (enterHeight, enterAdult) => {
    if (enterHeight >= minHeight.slide) {
      setIsSlideAllowed(globalPrompt.allowedSlideA);
    } else if (
      enterHeight < minHeight.slide &&
      enterHeight > minHeight.minRideHeight &&
      utils.yes.includes(enterAdult)
    ) {
      setIsSlideAllowed(globalPrompt.allowedSlideB);
    } else if (enterHeight < minHeight.minRideHeight) {
      setIsSlideAllowed(globalPrompt.deniedAll);
    } else {
      setIsSlideAllowed(globalPrompt.deniedSlide);
    }
  };

  const slideClickHandler = () => {
    {
      enterHeight.match(utils.verifyNum) && enterAdult.match(utils.verifyChar)
        ? slideVerification(enterHeight, enterAdult)
        : setIsSlideAllowed(globalPrompt.syntax_error);
    }

    setTimeout(() => {
      setIsSlideAllowed(isSlideAllowed);
    }, utils.timeout);
  };

  const slideHeightHandler = (e) => {
    setEnterHeight(e.target.value);
  };

  const slideAdultHandler = (e) => {
    setEnterAdult(e.target.value);
  };

  const waterSlideInfo = [
    <button
      type="button"
      className="slide-button choice-buttons"
      onClick={slideClickHandler}
    >
      {globalPrompt.slide_button}
    </button>,

    <input
      type="text"
      className="slide-height input-fields"
      onChange={slideHeightHandler}
      value={enterHeight}
      placeholder={globalPrompt.ask_user_height}
      maxLength={utils.maxChar}
    />,
    <input
      type="text"
      className="slide-adult input-fields"
      onChange={slideAdultHandler}
      value={enterAdult}
      placeholder={globalPrompt.ask_user_with_adult}
      maxLength={utils.maxChar}
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
