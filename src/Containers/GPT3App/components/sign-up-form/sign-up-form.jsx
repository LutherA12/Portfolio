import { NavLink, useNavigate } from "react-router-dom";
import "./sign-up-form.styles.scss";
import { useState } from "react";
import { verification } from "../../helperfiles/data";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState("");

  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    {
      userName && password && email.match(verification.validation)
        ? navigate("/ThankYouPage")
        : setVerified(verification.errorMessage);
    }

    setTimeout(() => {
      setVerified(verified);
    }, verification.errorTextDelay);
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const userEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div>
        <form
          className="sign-up-form-container gradient__bg"
          onSubmit={formSubmitHandler}
        >
          <h4 style={{ fontSize: "35px" }}>Welcome to GPT3!</h4>
          <input
            type="text"
            placeholder="Create your username"
            maxLength={verification.maxLength}
            minLength={verification.minLength}
            value={userName}
            onChange={userNameHandler}
            autoComplete="true"
          />
          <input
            type="password"
            placeholder="Create your password"
            maxLength={verification.maxLength}
            minLength={verification.minLength}
            value={password}
            onChange={userPasswordHandler}
            autoComplete="true"
          />
          <input
            type="email"
            placeholder="Enter your email"
            maxLength={verification.maxLength}
            value={email}
            onChange={userEmailHandler}
            autoComplete="true"
          />
          <div className="sign-up-form-button-container">
            <button type="submit">Click to Sign Up</button>
            <NavLink to="/GPT3App" className="button-link">
              <button type="button">Reconsidering?</button>
            </NavLink>
          </div>
        </form>
        <div className="form-error-container">{verified}</div>
      </div>
    </>
  );
}
