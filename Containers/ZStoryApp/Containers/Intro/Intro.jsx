import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { IntroStory, QuitBeforeIntroStory } from "../../helpers/AllFileExports";
import { buttons, openDoor, hit } from "../../helpers/Data";
import "./Intro.Styles.scss";

export default function Intro() {
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);
  const [isQuitdisabled, setIsQuitDisabled] = useState(false);

  const [introStory, setIntroStory] = useState("");
  const [quitStory, setQuitStory] = useState("");

  const playButtonHandler = () => {
    setIsPlayDisabled(true);
    setIsQuitDisabled(true);
    openDoor.play();

    setIntroStory(<IntroStory />);
  };

  const quitButtonHandler = () => {
    setIsPlayDisabled(true);
    setIsQuitDisabled(true);
    hit.play();

    setQuitStory(<QuitBeforeIntroStory />);
  };

  return (
    <div className="main-app-container">
      <div className="z-story-intro-container">
        <NavLink to="/">Home</NavLink>
        <h1>
          <div className="intro-one">
            {" "}
            Hello and welcome to: Pick Your Adventure. <br />
            <br />
          </div>
          <div className="intro-two">
            {" "}
            In this interactive story you will choose from different paths that
            you can take while reading. <br />
            <br />
          </div>
          <div className="intro-three">Let's see if you survive!!</div>
        </h1>
      </div>

      <div className="intro-buttons-container">
        <button
          className="play-button intro-buttons"
          type="button"
          onClick={playButtonHandler}
          disabled={isPlayDisabled}
        >
          {buttons.play}
        </button>

        <button
          className="quit-button intro-buttons"
          type="button"
          onClick={quitButtonHandler}
          disabled={isQuitdisabled}
        >
          {buttons.quit}
        </button>
      </div>

      <div className="intro-story-container story-containers">
        {introStory}
        {quitStory}
      </div>
    </div>
  );
}
