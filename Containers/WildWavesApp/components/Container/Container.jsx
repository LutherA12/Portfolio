import {
  LazyRiver,
  WaterSlide,
  WavePool,
} from "../../helpers/ComponentExports";
import { globalPrompt } from "../../helpers/Data";
import "./Container.Styles.scss";

export default function Container() {
  return (
    <div className="main-container">
      <h1 className="title">{globalPrompt.title}</h1>
      <div className="main-forms-container">
        <WaterSlide />
        <WavePool />
        <LazyRiver />
      </div>
      <p className="disclaimer">{globalPrompt.disclaimer}</p>
    </div>
  );
}
