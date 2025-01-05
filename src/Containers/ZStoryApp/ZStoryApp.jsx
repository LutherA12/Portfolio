import { React, useEffect } from "react";
import { Intro } from "./helpers/AllFileExports";
import "./ZStoryApp.Styles.scss";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="z-story-body-container">
      <Intro />
    </div>
  );
}
