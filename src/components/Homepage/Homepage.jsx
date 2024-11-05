import { Cards, Header, Footer } from "../componentExports";
import "./Homepage.styles.scss";

export default function Homepage() {
  return (
    <>
      <div className="home-page-container">
        <section className="main-intro-container">
          <Header />
        </section>

        <div className="divider"></div>

        <section className="main-body-container">
          <div className="main-card-container">
            <Cards />
          </div>
        </section>

        <div className="divider"></div>

        <section className="main-footer-container">
          <Footer />
        </section>
      </div>
    </>
  );
}
