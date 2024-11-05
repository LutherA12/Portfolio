import "./possibility.styles.scss";
import possibility from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="image not found" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination!!
        </h1>
        <p>
          We've tried to save the best for last & we really believe in our
          product! Virtual reality is still in it's infant stages, there is so
          much more that can be done! Imagine it: go anywhere, do anything, be
          anyone, gain knowledge beyond what you could without it, there is no
          limit to what you could acheve & you can help us make that happen!
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
