import "./Footer.Styles.scss";
import { footerText } from "../../HelperFiles/Data";

export default function Footer() {
  return (
    <div className="footer-text-container text-containers">
      {footerText.textA}
      <br />
      <br />
      <ul style={{ listStyle: "none" }}>
        <li>My Contact Information</li>
        <li>(614) 701-6160</li>
        <li>lbflame36@gmail.com</li>
        <li>
          &copy;This website and all embedded applications were built by & are
          owned by Luther
        </li>
      </ul>
    </div>
  );
}
