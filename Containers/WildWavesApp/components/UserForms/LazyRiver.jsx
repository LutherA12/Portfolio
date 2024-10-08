import { useState } from "react";
import { utils, minHeight, globalPrompt } from "../../helpers/Data";
import "./Forms.Styles.scss";

export default function LazyRiver() {
  const [isRiverAllowed, setIsRiverAllowed] = useState(``);
  const [enterHeight, setEnterHeight] = useState(``);
  const [enterAdult, setEnterAdult] = useState(``);

  const riverVerification = (enterHeight, enterAdult) => {
    if (enterHeight >= minHeight.river) {
      setIsRiverAllowed(globalPrompt.allowedRiverA);
    } else if (
      enterHeight < minHeight.river &&
      enterHeight > minHeight.minRideHeight &&
      utils.yes.includes(enterAdult)
    ) {
      setIsRiverAllowed(globalPrompt.allowedRiverB);
    } else if (enterHeight < minHeight.minRideHeight) {
      setIsRiverAllowed(globalPrompt.deniedAll);
    } else {
      setIsRiverAllowed(globalPrompt.deniedRiver);
    }
  };

  const riverClickHandler = () => {
    {
      enterHeight.match(utils.verifyNum) && enterAdult.match(utils.verifyChar)
        ? riverVerification(enterHeight, enterAdult)
        : setIsRiverAllowed(globalPrompt.syntax_error);
    }

    setTimeout(() => {
      setIsRiverAllowed(isRiverAllowed);
    }, utils.timeout);
  };

  const riverHeightHandler = (e) => {
    setEnterHeight(e.target.value);
  };

  const riverAdultHandler = (e) => {
    setEnterAdult(e.target.value);
  };

  const lazyRiverInfo = [
    <button
      type="button"
      className="river-button choice-buttons"
      onClick={riverClickHandler}
    >
      {globalPrompt.river_button}
    </button>,
    <input
      type="text"
      className="river-height input-fields"
      placeholder={globalPrompt.ask_user_height}
      onChange={riverHeightHandler}
      value={enterHeight}
      maxLength={utils.maxChar}
    />,
    <input
      type="text"
      className="river-adult input-fields"
      placeholder={globalPrompt.ask_user_with_adult}
      onChange={riverAdultHandler}
      value={enterAdult}
      maxLength={utils.maxChar}
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
