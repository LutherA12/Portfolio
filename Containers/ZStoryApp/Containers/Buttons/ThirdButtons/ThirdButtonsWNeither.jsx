import { React, useState } from "react";
import { buttontext, quittext } from "../../../helpers/Constants";
import {
  WalkNRush,
  WalkNRun,
  QuitBeforeThirdStoryWNeither,
} from "../../../helpers/AllFileExports";
import "../Buttons.Styles.scss";

export default function ThirdButtonsWNeither() {
  const [isRushDisabled, setIsRushDisabled] = useState(false);
  const [isRunDisabled, setIsRunDisabled] = useState(false);
  const [isQuitDisabled, setIsQuitDisabled] = useState(false);

  const [storyRush, setStoryRush] = useState("");
  const [storyRun, setStoryRun] = useState("");
  const [storyQuit, setStoryQuit] = useState("");

  const rushButtonHandler = () => {
    setIsRushDisabled(true);
    setIsRunDisabled(true);
    setIsQuitDisabled(true);

    setStoryRush(<WalkNRush />);
  };

  const runButtonHandler = () => {
    setIsRushDisabled(true);
    setIsRunDisabled(true);
    setIsQuitDisabled(true);

    setStoryRun(<WalkNRun />);
  };

  const quitButtonHandler = () => {
    setIsRushDisabled(true);
    setIsRunDisabled(true);
    setIsQuitDisabled(true);

    setStoryQuit(<QuitBeforeThirdStoryWNeither />);
  };

  const thirdButtonsDriveBasket = [
    <button
      className="rush-button third-buttons"
      onClick={rushButtonHandler}
      disabled={isRushDisabled}
      type="button"
    >
      {buttontext[7]}
    </button>,
    <button
      className="run-button third-buttons"
      onClick={runButtonHandler}
      disabled={isRunDisabled}
      type="button"
    >
      {buttontext[8]}
    </button>,
    <button
      className={`${quittext[2]} third-buttons`}
      onClick={quitButtonHandler}
      disabled={isQuitDisabled}
      type="button"
    >
      {buttontext[1]}
    </button>,
  ];

  return (
    <div>
      <div className="third-buttons-container">
        {thirdButtonsDriveBasket.map((thirdbuttonsdrivebasket, key) => {
          return <div key={key}>{thirdbuttonsdrivebasket}</div>;
        })}
      </div>
      <div className="-story-container story-containers">
        {storyRush} {storyRun} {storyQuit}
      </div>
    </div>
  );
}
