import { useState } from "react";
import { utils, minHeight, globalPrompt } from "../../helpers/Data";
import "./Forms.Styles.scss";

export default function LazyRiver() {
  const [isRiverAllowed, setIsRiverAllowed] = useState(``);
  const [enterHeight, setEnterHeight] = useState(``);
  const [enterAdult, setEnterAdult] = useState(``);

  const { yes, verifyChar, verifyNum, timeout, maxChar } = utils;
  const { river, minRideHeight } = minHeight;
  const {
    allowedRiverA,
    allowedRiverB,
    deniedAll,
    deniedRiver,
    syntax_error,
    river_button,
    ask_user_height,
    ask_user_with_adult,
  } = globalPrompt;

  const riverVerification = (enterHeight, enterAdult) => {
    if (enterHeight >= river) {
      setIsRiverAllowed(allowedRiverA);
    } else if (
      enterHeight < river &&
      enterHeight > minRideHeight &&
      yes.includes(enterAdult)
    ) {
      setIsRiverAllowed(allowedRiverB);
    } else if (enterHeight < minRideHeight) {
      setIsRiverAllowed(deniedAll);
    } else {
      setIsRiverAllowed(deniedRiver);
    }
  };

  const riverClickHandler = () => {
    {
      enterHeight.match(verifyNum) && enterAdult.match(verifyChar)
        ? riverVerification(enterHeight, enterAdult)
        : setIsRiverAllowed(syntax_error);
    }

    setTimeout(() => {
      setIsRiverAllowed(isRiverAllowed);
    }, timeout);
  };

  const lazyRiverInfo = [
    <button
      type="button"
      className="river-button choice-buttons"
      onClick={riverClickHandler}
    >
      {river_button}
    </button>,
    <input
      type="text"
      className="river-height input-fields"
      placeholder={ask_user_height}
      onChange={(e) => setEnterHeight(e.target.value)}
      value={enterHeight}
      maxLength={maxChar}
    />,
    <input
      type="text"
      className="river-adult input-fields"
      placeholder={ask_user_with_adult}
      onChange={(e) => setEnterAdult(e.target.value)}
      value={enterAdult}
      maxLength={maxChar}
    />,
  ];

  return (
    <div className="lazy-river-container attraction-containers">
      {lazyRiverInfo.map((info, key) => {
        return <div key={key}>{info}</div>;
      })}
      <h5 className="river-display-field display-fields">{isRiverAllowed}</h5>
    </div>
  );
}
