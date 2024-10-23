import { NavLink } from "react-router-dom";
import { cards } from "../../HelperFiles/Data";
import "./Cards.Styles.scss";

export default function Cards() {
  return (
    <>
      <div className="text-containers" style={{ paddingBottom: "4vh" }}>
        The second section here features few of my applications on the cards
        below along with a short description. I've added an error page for all
        routes if there is a typo in the address bar & each application has a
        home link that will bring you right back to this page. Please explore &
        enjoy!
      </div>

      {cards.map((cards, index) => {
        return (
          <div className={`${cards.cardContainer} card-containers`} key={index}>
            <NavLink
              to={cards.linkTo}
              className={`${cards.cardLinkColor} card-links`}
            >
              <img src={cards.img} alt={cards.altImg} className="image-links" />
              <h6 className={`${cards.cardTitleDiv} card-titles`}>
                {cards.title}
              </h6>
            </NavLink>
            <p className={`${cards.cardDescColor} image-link-desc`}>
              {cards.desc}
            </p>
          </div>
        );
      })}
    </>
  );
}
