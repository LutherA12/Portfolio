import { NavLink } from "react-router-dom";
import "./thank-you-page.styles.scss";

export default function ThankYouPage() {
  return (
    <div className="thank-you-div gradient__bg">
      <>
        Thank you for believing in us! Your welcome package should arrive in
        your email inbox within a few minutes! <br />
        <br />
        <NavLink to="/GPT3App" className="articles-home-link">
          Take me home!
        </NavLink>
      </>
    </div>
  );
}
