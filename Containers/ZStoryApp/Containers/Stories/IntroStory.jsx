import { React } from "react";
import { FirstButtons } from "../../helpers/AllFileExports";
import "./Stories.Styles.scss";

export default function IntroStory() {
  return (
    <div className="intro-story-container story-containers">
      <p>
        {" "}
        You are just leaving your home to go to the store when you manage to
        spot something peculiar outside. It's your neighbor, but something is
        wrong. He is wobbling back and forth, stumbling around and making
        strange noises. Being an extremely intelligent individual you don't go
        anywhere near him thinking to yourself "he is probably just drunk again
        or whatever and I don't want to get roped into another incoherent
        conversation with him", you've lived beside him now for a few years and
        this is nothing new. He's come home at night more than a few times very
        intoxicated. As you round the corner to your driveway you start thinking
        about walking to the store instead of driving, it is a very nice day
        after all...
      </p>
      <FirstButtons />
    </div>
  );
}

/**
 * 
 * , forwardRef, useRef, useImperativeHandle
 * 
 import { FirstButtons } from "../../../helpers/componentExports";
import "./IntroStory.Styles.scss";

const IntroStory = forwardRef((props, ref) => {
  const storyRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (storyRef.current) {
        storyRef.current.focus();
      }
    },
  }));

  return (
    <div className="intro-story-container">
      <p ref={storyRef} tabIndex="-1">
        {" "}
        You are just leaving your home to go to the store when you manage to
        spot something peculiar outside. It's your neighbor, but something is
        wrong. He is wobbling back and forth, stumbling around and making
        strange noises. Being an extremely intelligent individual you don't go
        anywhere near him thinking to yourself "he is probably just drunk again
        or whatever and I don't want to get roped into another incoherent
        conversation with him", you've lived beside him now for a few years and
        this is nothing new. He's come home at night more than a few times very
        intoxicated. As you round the corner to your driveway you start thinking
        about walking to the store instead of driving, it is a very nice day
        after all...
      </p>
      <FirstButtons />
    </div>
  );
});

export default IntroStory;
 */
