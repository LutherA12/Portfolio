import { React, useState } from "react";

export default function Backups() {
  //const { useState } = React;

  const display = {
    timeout: 5000,
  };

  const verify = /^[a-zA-Z0-9\s]+$/;

  const maxCharLength = 4;

  const globalPrompt = {
    ask_user_height: `How tall are you in inches?`,
    ask_user_with_adult: `Are you with an adult?`,
    syntax_error: `Maximum Of Four Alphanumeric Characters Allowed : Please Try Again`,
  };

  function LazyRiverForm() {
    const [isRiverAllowed, setIsRiverAllowed] = useState(``);
    const [enterHeightRiver, setEnterHeightRiver] = useState(``);
    const [enterAdultRiver, setEnterAdultRiver] = useState(``);

    const minHeightRiver = 36;

    const localPromptRiver = {
      river_button: `Fill in information below & click here to purchase a Lazy River ticket`,
      allowedA: `Here is your ticket, enjoy the Relaxing Lazy River!`,
      allowedB: `You are allowed on any ride with an adult, enjoy the Relaxing Lazy River!`,
      denied: `You must be at least ${minHeightRiver} inches tall or with an adult to enjoy the Relaxing Lazy River!`,
    };

    const riverClickHandler = () => {
      {
        enterHeightRiver && enterAdultRiver.match(verify)
          ? riverVerification(enterHeightRiver, enterAdultRiver)
          : setIsRiverAllowed(globalPrompt.syntax_error);
      }

      const riverVerification = (enterHeightRiver, enterAdultRiver) => {
        if (enterHeightRiver >= minHeightRiver) {
          setIsRiverAllowed(localPromptRiver.allowedA);
        } else if (
          enterHeightRiver < minHeightRiver &&
          enterAdultRiver == "yes"
        ) {
          setIsRiverAllowed(localPromptRiver.allowedB);
        } else {
          setIsRiverAllowed(localPromptRiver.denied);
        }
      };

      setTimeout(() => {
        setIsRiverAllowed(isRiverAllowed);
      }, display.timeout);
    };

    const riverHeightHandler = (e) => {
      setEnterHeightRiver(e.target.value);
    };

    const riverAdultHandler = (e) => {
      setEnterAdultRiver(e.target.value);
    };

    const lazyRiverInfo = [
      <button
        type="button"
        className="river-button choice-buttons"
        onClick={riverClickHandler}
      >
        {localPromptRiver.river_button}
      </button>,
      <input
        type="text"
        className="river-height input-fields"
        placeholder={globalPrompt.ask_user_height}
        onChange={riverHeightHandler}
        value={enterHeightRiver}
        maxLength={maxCharLength}
      />,
      <input
        type="text"
        className="river-adult input-fields"
        placeholder={globalPrompt.ask_user_with_adult}
        onChange={riverAdultHandler}
        value={enterAdultRiver}
        maxLength={maxCharLength}
      />,
    ];
    return (
      <div className="lazy-river-container attraction-containers">
        {lazyRiverInfo.map((lazyriverinfo, key) => {
          return <div key={key}>{lazyriverinfo}</div>;
        })}
        <h5 className="pool-display-field display-fields">{isRiverAllowed}</h5>
      </div>
    );
  }

  function WavePoolForm() {
    const [isPoolAllowed, setIsPoolAllowed] = useState(``);
    const [enterHeightPool, setEnterHeightPool] = useState(``);
    const [enterAdultPool, setEnterAdultPool] = useState(``);

    const minHeightPool = 42;

    const localPromptPool = {
      wave_button: `Fill in information below & click here to purchase a Wave Pool ticket`,
      allowedA: `Here is your ticket, enjoy the Wacky Wave Pool!`,
      allowedB: `You are allowed on any ride with an adult, enjoy the Wacky Wave Pool!`,
      denied: `You must be at least ${minHeightPool} inches tall or with an adult to enjoy the Wacky Wave Pool!`,
    };

    const poolClickHandler = () => {
      {
        enterHeightPool && enterAdultPool.match(verify)
          ? poolVerification(enterHeightPool, enterAdultPool)
          : setIsPoolAllowed(globalPrompt.syntax_error);
      }

      const poolVerification = (enterHeightPool, enterAdultPool) => {
        if (enterHeightPool >= minHeightPool) {
          setIsPoolAllowed(localPromptPool.allowedA);
        } else if (enterHeightPool < minHeightPool && enterAdultPool == "yes") {
          setIsPoolAllowed(localPromptPool.allowedB);
        } else {
          setIsPoolAllowed(localPromptPool.denied);
        }
      };

      setTimeout(() => {
        setIsPoolAllowed(isPoolAllowed);
      }, display.timeout);
    };

    const poolHeightHandler = (e) => {
      setEnterHeightPool(e.target.value);
    };

    const poolAdultHandler = (e) => {
      setEnterAdultPool(e.target.value);
    };

    const wavePoolInfo = [
      <button
        type="button"
        className="wave-button choice-buttons"
        onClick={poolClickHandler}
      >
        {localPromptPool.wave_button}
      </button>,

      <input
        type="text"
        className="pool-height input-fields"
        placeholder={globalPrompt.ask_user_height}
        onChange={poolHeightHandler}
        value={enterHeightPool}
        maxLength={maxCharLength}
      />,
      <input
        type="text"
        className="pool-adult input-fields"
        placeholder={globalPrompt.ask_user_with_adult}
        onChange={poolAdultHandler}
        value={enterAdultPool}
        maxLength={maxCharLength}
      />,
    ];

    return (
      <div className="wave-pool-container attraction-containers">
        {wavePoolInfo.map((wavepoolinfo, key) => {
          return <div key={key}>{wavepoolinfo}</div>;
        })}
        <h5 className="pool-display-field display-fields">{isPoolAllowed}</h5>
      </div>
    );
  }

  function WaterSlideForm() {
    const [isSlideAllowed, setIsSlideAllowed] = useState(``);
    const [enterHeightSlide, setEnterHeightSlide] = useState(``);
    const [enterAdultSlide, setEnterAdultSlide] = useState(``);

    const minHeightSlide = 48;

    const localPromptSlide = {
      slide_button: `Fill in information below & click here to purchase a Water Slide ticket`,
      allowedA: `Here is your ticket, enjoy the Wild Water Slide!`,
      allowedB: `You are allowed on any ride with an adult, enjoy the Wild Water Slide!`,
      denied: `You must be at least ${minHeightSlide} inches tall or with an adult to enjoy the Wild Water Slide!`,
    };

    const slideClickHandler = () => {
      {
        enterHeightSlide && enterAdultSlide.match(verify)
          ? slideVerification(enterHeightSlide, enterAdultSlide)
          : setIsSlideAllowed(globalPrompt.syntax_error);
      }

      const slideVerification = (enterHeightSlide, enterAdultSlide) => {
        if (enterHeightSlide >= minHeightSlide) {
          setIsSlideAllowed(localPromptSlide.allowedA);
        } else if (
          enterHeightSlide < minHeightSlide &&
          enterAdultSlide == "yes"
        ) {
          setIsSlideAllowed(localPromptSlide.allowedB);
        } else {
          setIsSlideAllowed(localPromptSlide.denied);
        }
      };

      setTimeout(() => {
        setIsSlideAllowed(isSlideAllowed);
      }, display.timeout);
    };

    const slideHeightHandler = (e) => {
      setEnterHeightSlide(e.target.value);
    };

    const slideAdultHandler = (e) => {
      setEnterAdultSlide(e.target.value);
    };

    const waterSlideInfo = [
      <button
        type="button"
        className="slide-button choice-buttons"
        onClick={slideClickHandler}
      >
        {localPromptSlide.slide_button}
      </button>,

      <input
        type="text"
        className="slide-height input-fields"
        onChange={slideHeightHandler}
        value={enterHeightSlide}
        placeholder={globalPrompt.ask_user_height}
        maxLength={maxCharLength}
      />,
      <input
        type="text"
        className="slide-adult input-fields"
        onChange={slideAdultHandler}
        value={enterAdultSlide}
        placeholder={globalPrompt.ask_user_with_adult}
        maxLength={maxCharLength}
      />,
    ];
    return (
      <div className="water-slide-container attraction-containers">
        {waterSlideInfo.map((waterslideinfo, key) => {
          return <div key={key}>{waterslideinfo}</div>;
        })}
        <h5 className="slide-display-field display-fields">{isSlideAllowed}</h5>
      </div>
    );
  }

  function Container() {
    const TEXT = {
      title: `Wild Waves Aquatic Park`,
      disclaimer: `*Please note: minimun height requirements are enforced at each
          attraction*`,
    };

    return (
      <div className="main-container">
        <h1 className="title">{TEXT.title}</h1>
        <div className="main-attraction-container">
          <WaterSlideForm />
          <WavePoolForm />
          <LazyRiverForm />
        </div>
        <p className="disclaimer">{TEXT.disclaimer}</p>
      </div>
    );
  }

  function App() {
    return (
      <div className="main-app-container">
        <Container />
      </div>
    );
  }
}
