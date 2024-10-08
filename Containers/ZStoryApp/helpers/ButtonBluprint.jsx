import { React, useState } from "react";
import {} from "../../helpers/AllFileExports";
import "./Buttons.Styles.scss";

export default function Buttons() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isQuitDisabled, setIsQuitDisabled] = useState(false);

  const [story, setStory] = useState("");
  const [story, setStory] = useState("");
  const [storyQuit, setStoryQuit] = useState("");

  const ButtonHandler = () => {
    setIsDisabled(true);
    setIsDisabled(true);
    setIsQuitDisabled(true);

    setStory();
  };

  const ButtonHandler = () => {
    setIsDisabled(true);
    setIsDisabled(true);
    setIsQuitDisabled(true);

    setStory();
  };

  const quitButtonHandler = () => {
    setIsDisabled(true);
    setIsDisabled(true);
    setIsQuitDisabled(true);

    setStoryQuit();
  };

  const buttons = [
    <button
      className="drive-button first-buttons"
      onClick={ButtonHandler}
      disabled={isDisabled}
      type="button"
    >
      Green to Drive...
    </button>,
    <button
      className="walk-button first-buttons"
      onClick={ButtonHandler}
      disabled={isDisabled}
      type="button"
    >
      Yellow to Walk...
    </button>,
    <button
      className="quit-button first-buttons"
      onClick={quitButtonHandler}
      disabled={isQuitDisabled}
      type="button"
    >
      Blue to Quit!!
    </button>,
  ];

  return (
    <div>
      <div className="first-buttons-container">
        {buttons.map((buttons, key) => {
          return <div key={key}>{buttons}</div>;
        })}
      </div>
      <div className="-story-container story-containers">
        {story} {story} {storyQuit}
      </div>
    </div>
  );
}
