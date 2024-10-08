import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { IntroStory, QuitBeforeIntroStory } from "../../helpers/AllFileExports";
import { buttons, openDoor, hit } from "../../helpers/Constants";
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

  const intros = [
    <div className="intro-one">
      {" "}
      Hello and welcome to: Pick Your Adventure. <br />
      <br />
    </div>,
    <div className="intro-two">
      {" "}
      In this interactive story you will choose from different paths that you
      can take while reading. <br />
      <br />
    </div>,
    <div className="intro-three">Let's see if you survive!!</div>,
  ];

  const introbuttons = [
    <button
      className="play-button intro-buttons"
      type="button"
      onClick={playButtonHandler}
      disabled={isPlayDisabled}
    >
      {buttons.play}
    </button>,
    <button
      className="quit-button intro-buttons"
      type="button"
      onClick={quitButtonHandler}
      disabled={isQuitdisabled}
    >
      {buttons.quit}
    </button>,
  ];

  return (
    <div className="main-app-container">
      <div className="z-story-intro-container">
        <NavLink to="/">Home</NavLink>
        <h1>
          {intros.map((intros, key) => {
            return <div key={key}>{intros}</div>;
          })}
        </h1>
      </div>

      <div className="intro-buttons-container">
        {introbuttons.map((introbuttons, key) => {
          return <div key={key}>{introbuttons}</div>;
        })}
      </div>

      <div className="intro-story-container story-containers">
        {introStory}
        {quitStory}
      </div>
    </div>
  );
}

/**
 * 
 * 
 * const [music, setMusic] = useState(""); //won't work
 * 
 * setMusic(<BackgroundMusic src="../../assets/audio/backgroundNoise.mp3" />); //won't work
 * 
 * <audio src="../../assets/audio/backgroundNoise.mp3" ref={audioRef} />,
 * 
   const storyRefHandler = () => {
    if (introStoryRef.current) {
      introStoryRef.current.focus();
    }
  };

  const playButtonHandler = () => {
    setIsPlayDisabled(true);
    setIsQuitDisabled(true);

    setIntroStory(<IntroStory ref={introStoryRef} />);
  };

  const masterHandler = async () => {
    storyRefHandler();
    playButtonHandler();
  };

  const quitButtonHandler = () => {
    setIsPlayDisabled(true);
    setIsQuitDisabled(true);

    setQuitStory(<QuitBeforeIntroStory />);
  };

 * 
 * DriveStoryFirst,
 * 
 *   const [firstButtons, setFirstButtons] = useState("");

  const [isDriveDisabled, setIsDriveDisabled] = useState(false);
  const [isWalkDisabled, setIsWalkDisabled] = useState(false);
  const [isHomeDisabled, setIsHomeDisabled] = useState(false);

  const [driveStory, setDriveStory] = useState("");
 * 
 *   const driveButtonHandler = () => {
    setIsDriveDisabled(true);
    setIsWalkDisabled(true);
    setIsHomeDisabled(true);

    setDriveStory(<DriveStoryFirst />);
  };
 * 
 * 
 * {firstButtons}
 * 
 *   const firstbuttons = [
    <button
      className="drive-button first-buttons"
      onClick={driveButtonHandler}
      disabled={isDriveDisabled}
      type="button"
    >
      {buttoninfo.text[2]}
    </button>,
    <button
      className="walk-button first-buttons"
      onClick={walkButtonHandler}
      disabled={isWalkDisabled}
      type="button"
    >
      {buttoninfo.text[3]}
    </button>,
    <button
      className="home-button first-buttons"
      onClick={homeButtonHandler}
      disabled={isHomeDisabled}
      type="button"
    >
      {buttoninfo.text[4]}
    </button>,
  ];

  const FirstButtons = useMemo(function FirstButtons() {
    return firstbuttons;
  });
 * 
 * 
 * 
 * 
 * intro.intro.map((intro) => {
            return (
              <Fragment key={Math.random()}>
                {intro} <br />
              </Fragment>
            );
          })
 * 
 * 
 * 
 * buttons.buttons.map((button) => {
          return <div key={Math.random()}>{button}</div>;
        })
 * 

          const Intros = useMemo(function Intros() {
    return intros;
  });

    const IntroButtons = useMemo(function IntroButtons() {
    return introbuttons;
  });
 * 
 */
