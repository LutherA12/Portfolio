import { React } from "react";
import { Container } from "./helpers/ComponentExports";
import { NavLink } from "react-router-dom";
import "./WildWavesApp.Styles.scss";

export default function WildWavesApp() {
  return (
    <div className="main-app-container">
      <p>
        <NavLink
          to="/"
          style={{
            fontSize: "25px",
            marginLeft: "47vw",
            color: "var(--wild-waves-color)",
          }}
        >
          Home
        </NavLink>
      </p>
      <Container />
    </div>
  );
}
