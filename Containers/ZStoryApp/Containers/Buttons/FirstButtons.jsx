import { React, useState } from "react";
import {
  Drive,
  Walk,
  QuitBeforeFirstStory,
} from "../../helpers/AllFileExports";
import {
  buttons,
  quitClasses,
  car,
  nature,
  hit,
} from "../../helpers/Constants";
import "./Buttons.Styles.scss";

export default function FirstButtons() {
  const [isDriveDisabled, setIsDriveDisabled] = useState(false);
  const [isWalkDisabled, setIsWalkDisabled] = useState(false);
  const [isQuitDisabled, setIsQuitDisabled] = useState(false);

  const [storyDrive, setStoryDrive] = useState("");
  const [storyWalk, setStoryWalk] = useState("");
  const [storyQuit, setStoryQuit] = useState("");

  const driveButtonHandler = async () => {
    setIsDriveDisabled(true);
    setIsWalkDisabled(true);
    setIsQuitDisabled(true);
    car.play();

    setStoryDrive(<Drive />);
  };

  const walkButtonHandler = () => {
    setIsDriveDisabled(true);
    setIsWalkDisabled(true);
    setIsQuitDisabled(true);
    nature.play();

    setStoryWalk(<Walk />);
  };

  const quitButtonHandler = () => {
    setIsDriveDisabled(true);
    setIsWalkDisabled(true);
    setIsQuitDisabled(true);
    hit.play();

    setStoryQuit(<QuitBeforeFirstStory />);
  };

  const firstbuttons = [
    <button
      className="drive-button first-buttons"
      onClick={driveButtonHandler}
      disabled={isDriveDisabled}
      type="button"
    >
      {buttons.drive}
    </button>,
    <button
      className="walk-button first-buttons"
      onClick={walkButtonHandler}
      disabled={isWalkDisabled}
      type="button"
    >
      {buttons.walk}
    </button>,
    <button
      className={`${quitClasses.A} first-buttons`}
      onClick={quitButtonHandler}
      disabled={isQuitDisabled}
      type="button"
    >
      {buttons.quit}
    </button>,
  ];

  return (
    <div>
      <div className="first-buttons-container">
        {firstbuttons.map((firstbuttons, key) => {
          return <div key={key}>{firstbuttons}</div>;
        })}
      </div>
      <div className="first-story-container story-containers">
        {storyDrive} {storyWalk} {storyQuit}
      </div>
    </div>
  );
}

/**
 * 

 */
