import "./feature.styles.scss";

export default function Feature({ title, text }) {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div className="feature-accent-div"></div>
        <h1 className="gpt3__features-title">{title}</h1>
      </div>

      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
