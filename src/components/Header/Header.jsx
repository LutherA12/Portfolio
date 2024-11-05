import "./Header.Styles.scss";
import me from "../../Assets/me.png";
import { headerText } from "../../HelperFiles/Data";

export default function Header() {
  return (
    <>
      <div className="heading-container">
        <h3 className="heading">Hello</h3>
      </div>

      <div className="image-container">
        <img src={me} alt="img not found" />
      </div>

      <div className="intro-container">
        <h3 className="intro">My name is Luther</h3>
      </div>

      <div className="intro-text-container text-containers">
        {headerText.textA}{" "}
        <a href="https://github.com/LutherA12" className="github-link">
          Github
        </a>{" "}
        {headerText.textB}
      </div>
    </>
  );
}
