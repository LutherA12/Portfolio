import { Cards } from "../componentExports";
import { homepage } from "../../HelperFiles/Data";
import me from "../../Assets/me.png";
import "./Homepage.styles.scss";

export default function Homepage() {
  return (
    <>
      <div className="home-page-container">
        <section className="main-intro-container">
          <div className="heading-container">
            <h3 className="heading">{homepage.heading}</h3>
          </div>

          <div className="image-container">
            <img src={me} alt="img not found" />
          </div>

          <div className="intro-container">
            <h3 className="intro">{homepage.intro}</h3>
          </div>

          <div className="intro-text-container text-containers">
            {homepage.introtext}
          </div>
        </section>

        <div className="divider"></div>

        <section className="main-body-container">
          <div className="body-text-container text-containers">
            {homepage.bodytext}
          </div>
          <div className="main-card-container">
            <Cards />
          </div>
        </section>

        <div className="divider"></div>

        <section className="main-footer-container">
          <div className="footer-text-container text-containers">
            {homepage.footertext}
          </div>
        </section>
      </div>
    </>
  );
}

/**
 * 
 * 
 *   const carouselStyles = {
    A: {
      width: "412px",
      height: "612px",
      backgroundColor: "lightblue",
    },
    B: {
      width: "412px",
      height: "612px",
      backgroundColor: "lightyellow",
    },
    C: {
      width: "412px",
      height: "612px",
      backgroundColor: "lightcoral",
    },
    buttonsContainer: {
      width: "412px",
      margin: "auto",
      display: "flex",
      justifyContent: "space-evenly",
      backgroundColor: "lightgreen",
    },
    buttons: {
      padding: "5px 20px",
      cursor: "pointer",
    },
  };

  const arrows = {
    left: `<=`,
    right: `=>`,
  };

  const [styleA, setStyleA] = useState("carousel-containerA");

  const leftSlideHander = () => {
    leftScrollHandlerA();
  };

  const leftScrollHandlerA = () => {
    setStyleA("carousel-containerB");
  };

 * 
 * 
 * 
 * 
 *       <div className="carousel-container">
        <div className={`${styleA}`}>
          <div className="A" style={carouselStyles.A}>
            A
          </div>
          <div className="B" style={carouselStyles.B}>
            B
          </div>
          <div className="C" style={carouselStyles.C}>
            C
          </div>
        </div>
      </div>

      <div className="carousel-buttons" style={carouselStyles.buttonsContainer}>
        <button
          type="button"
          className="left-button arrow-buttons"
          style={carouselStyles.buttons}
          onClick={leftSlideHander}
        >
          {arrows.left}
        </button>
        <button
          type="button"
          className="right-button arrow-buttons"
          style={carouselStyles.buttons}
        >
          {arrows.right}
        </button>
      </div>
 * 
 * 
 * 
 * 
 * 
 *           <div>Item A</div>
          <div>Item B</div>
          <div>Item C</div>
          <div>Item D</div>
          <div>Item E</div>
          <div>Item F</div>
          <div>Item G</div>
          <div>Item H</div>
          <div>Item I</div>
          <div>Item J</div>
          <div>Item K</div>
          <div>Item L</div>
          <div>Item M</div>
          <div>Item N</div>
          <div>Item O</div>
          <div>Item P</div>
 * 
 * 
 *  const Cards = [
    <div className="card-containers">
      <NavLink to="/GPT3App" className="gpt3-card-link card-links">
        <img src={AI} alt="aiImg" className="ai-image-link image-links" />
        <h6 className="ai-card-title card-titles">GPT3</h6>
      </NavLink>
      <p className="ai-desc image-link-desc">{Gpt3desc}</p>
    </div>,
    <div className="card-containers">
      <NavLink to="/MonsterApp" className="monster-card-link card-links">
        <img
          src={Monster}
          alt="monsterImg"
          className="monster-image-link image-links"
        />
        <h6 className="monster-card-title card-titles">Monster Rolodex</h6>
      </NavLink>
      <p className="monster-desc image-link-desc">{MonsterRolodexdesc}</p>
    </div>,
    <div className="card-containers">
      <NavLink to="/ZStoryApp" className="zstory-card-link card-links">
        <img src={Z} alt="ZImg" className="zstory-image-link image-links" />
        <h6 className="zstory-card-title card-titles">ZStory</h6>
      </NavLink>
      <p className="zstory-desc image-link-desc">{ZStorydesc}</p>
    </div>,
    <div className="card-containers">
      <NavLink to="/CrownApp" className="crown-card-link card-links">
        Crown Clothing
      </NavLink>
    </div>,
  ];
 * 
            {Cards.map((cards, index) => {
              return <div key={index}>{cards}</div>;
            })}
            


      <div style={{ backgroundColor: "darkgreen" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


  import Carousel from "react-multi-carousel";
import "/node_modules/react-multi-carousel/lib/styles.css";

 */
