import { NavLink } from "react-router-dom";
import "./sign-in-page.styles.scss";

export default function SignInPage() {
  return (
    <div className="gradient__bg sign-in-page-container">
      <div className="sign-in-page-text-container">
        Fear Not!! You've reached the correct sign in page. This page will
        appear in full once you have received & confirmed the email sent to you
        by signing up! Don't worry, this is just a security measure to ensure
        no-one tries anything funny & that the people who sign up are the only
        ones privy to this page & the information on it.
      </div>

      <NavLink to="/GPT3App" className="sign-in-page-btn-container">
        <button type="button">
          Click here to return home & sign up already!
        </button>
      </NavLink>
    </div>
  );
}
