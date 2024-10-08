import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import "./brand.styles.scss";

export default function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <>
        <div>
          <img src={google} alt="image not found" />
        </div>
        <div>
          <img src={slack} alt="image not found" />
        </div>
        <div>
          <img src={atlassian} alt="image not found" />
        </div>
        <div>
          <img src={shopify} alt="image not found" />
        </div>
        <div>
          <img src={dropbox} alt="image not found" />
        </div>
      </>
    </div>
  );
}
