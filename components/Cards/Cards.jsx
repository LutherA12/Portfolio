import { NavLink } from "react-router-dom";
import { cards } from "../../HelperFiles/Data";
import "./Cards.Styles.scss";

export default function Cards() {
  return (
    <>
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
