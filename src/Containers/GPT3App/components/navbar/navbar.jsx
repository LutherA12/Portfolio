import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.styles.scss";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navlinks = (
    <>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Blogs</a>
      </p>
    </>
  );

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo not found" />
        </div>

        <div className="gpt3__navbar-links_container">{navlinks}</div>
      </div>

      <div>
        <form className="gpt3__navbar-sign">
          <NavLink to="/SignInPage">
            <p>Sign In</p>
          </NavLink>

          <NavLink to="/SignUpForm">
            <button type="button">Sign Up</button>
          </NavLink>
        </form>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">{navlinks}</div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <NavLink to="/SignUpForm">
                <button type="button">Sign Up</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
