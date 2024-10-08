import "./features.styles.scss";
import { Feature } from "../../components/componentExports";
import { FeaturesData } from "../../helperfiles/data";

export default function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now! You just need to realize it! Step into the future
          today & make it happen!
        </h1>
        <p>Request Early Access to Get Started!</p>
      </div>

      <div className="gpt3__features-container">
        {FeaturesData.map((features, index) => {
          return (
            <div key={index}>
              <Feature title={features.title} text={features.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
