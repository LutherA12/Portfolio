import { useState } from "react";
import { utils, minHeight, globalPrompt } from "../../helpers/Data";
import "./Forms.Styles.scss";

export default function WavePool() {
  const [isPoolAllowed, setIsPoolAllowed] = useState(``);
  const [enterHeight, setEnterHeight] = useState(``);
  const [enterAdult, setEnterAdult] = useState(``);

  const { yes, verifyNum, verifyChar, timeout, maxChar } = utils;
  const { pool, minRideHeight } = minHeight;
  const {
    allowedPoolA,
    allowedPoolB,
    deniedAll,
    deniedPool,
    syntax_error,
    wave_button,
    ask_user_height,
    ask_user_with_adult,
  } = globalPrompt;

  const poolVerification = (enterHeight, enterAdult) => {
    if (enterHeight >= pool) {
      setIsPoolAllowed(allowedPoolA);
    } else if (
      enterHeight < pool &&
      enterHeight > minRideHeight &&
      yes.includes(enterAdult)
    ) {
      setIsPoolAllowed(allowedPoolB);
    } else if (enterHeight < minRideHeight) {
      setIsPoolAllowed(deniedAll);
    } else {
      setIsPoolAllowed(deniedPool);
    }
  };

  const poolClickHandler = () => {
    {
      enterHeight.match(verifyNum) && enterAdult.match(verifyChar)
        ? poolVerification(enterHeight, enterAdult)
        : setIsPoolAllowed(syntax_error);
    }

    setTimeout(() => {
      setIsPoolAllowed(isPoolAllowed);
    }, timeout);
  };

  const wavePoolInfo = [
    <button
      type="button"
      className="wave-button choice-buttons"
      onClick={poolClickHandler}
    >
      {wave_button}
    </button>,

    <input
      type="text"
      className="pool-height input-fields"
      placeholder={ask_user_height}
      onChange={(e) => setEnterHeight(e.target.value)}
      value={enterHeight}
      maxLength={maxChar}
    />,
    <input
      type="text"
      className="pool-adult input-fields"
      placeholder={ask_user_with_adult}
      onChange={(e) => setEnterAdult(e.target.value)}
      value={enterAdult}
      maxLength={maxChar}
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
