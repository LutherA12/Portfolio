import { useState } from "react";
import { buttons, quitClasses } from "../../../helpers/Data";
import {
  WalkCRush,
  WalkCRun,
  QuitBeforeThirdStoryWCart,
} from "../../../helpers/AllFileExports";
import "../Buttons.Styles.scss";

export default function ThirdButtonsWCart() {
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

    setStoryRush(<WalkCRush />);
  };

  const runButtonHandler = () => {
    setIsRushDisabled(true);
    setIsRunDisabled(true);
    setIsQuitDisabled(true);

    setStoryRun(<WalkCRun />);
  };

  const quitButtonHandler = () => {
    setIsRushDisabled(true);
    setIsRunDisabled(true);
    setIsQuitDisabled(true);

    setStoryQuit(<QuitBeforeThirdStoryWCart />);
  };

  const thirdButtonsDriveBasket = [
    <button
      className="rush-button third-buttons"
      onClick={rushButtonHandler}
      disabled={isRushDisabled}
      type="button"
    >
      {buttons.rush}
    </button>,
    <button
      className="run-button third-buttons"
      onClick={runButtonHandler}
      disabled={isRunDisabled}
      type="button"
    >
      {buttons.run}
    </button>,
    <button
      className={`${quitClasses.C} third-buttons`}
      onClick={quitButtonHandler}
      disabled={isQuitDisabled}
      type="button"
    >
      {buttons.quit}
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