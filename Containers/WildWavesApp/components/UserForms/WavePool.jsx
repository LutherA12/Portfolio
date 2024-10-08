import { useState } from "react";
import { utils, minHeight, globalPrompt } from "../../helpers/Data";
import "./Forms.Styles.scss";

export default function WavePool() {
  const [isPoolAllowed, setIsPoolAllowed] = useState(``);
  const [enterHeight, setEnterHeight] = useState(``);
  const [enterAdult, setEnterAdult] = useState(``);

  const poolVerification = (enterHeight, enterAdult) => {
    if (enterHeight >= minHeight.pool) {
      setIsPoolAllowed(globalPrompt.allowedPoolA);
    } else if (
      enterHeight < minHeight.pool &&
      enterHeight > minHeight.minRideHeight &&
      utils.yes.includes(enterAdult)
    ) {
      setIsPoolAllowed(globalPrompt.allowedPoolB);
    } else if (enterHeight < minHeight.minRideHeight) {
      setIsPoolAllowed(globalPrompt.deniedAll);
    } else {
      setIsPoolAllowed(globalPrompt.deniedPool);
    }
  };

  const poolClickHandler = () => {
    {
      enterHeight.match(utils.verifyNum) && enterAdult.match(utils.verifyChar)
        ? poolVerification(enterHeight, enterAdult)
        : setIsPoolAllowed(globalPrompt.syntax_error);
    }

    setTimeout(() => {
      setIsPoolAllowed(isPoolAllowed);
    }, utils.timeout);
  };

  const poolHeightHandler = (e) => {
    setEnterHeight(e.target.value);
  };

  const poolAdultHandler = (e) => {
    setEnterAdult(e.target.value);
  };

  const wavePoolInfo = [
    <button
      type="button"
      className="wave-button choice-buttons"
      onClick={poolClickHandler}
    >
      {globalPrompt.wave_button}
    </button>,

    <input
      type="text"
      className="pool-height input-fields"
      placeholder={globalPrompt.ask_user_height}
      onChange={poolHeightHandler}
      value={enterHeight}
      maxLength={utils.maxChar}
    />,
    <input
      type="text"
      className="pool-adult input-fields"
      placeholder={globalPrompt.ask_user_with_adult}
      onChange={poolAdultHandler}
      value={enterAdult}
      maxLength={utils.maxChar}
    />,
  ];

  return (
    <div className="wave-pool-container attraction-containers">
      {wavePoolInfo.map((info, key) => {
        return <div key={key}>{info}</div>;
      })}
      <h5 className="pool-display-field display-fields">{isPoolAllowed}</h5>
    </div>
  );
}
