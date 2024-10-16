import "./Header.Styles.scss";
import me from "../../Assets/me.png";

export default function Header() {
  return (
    <>
      <div className="heading-container">
        <h3 className="heading">Hello</h3>
      </div>

      <div className="image-container">
        <img src={me} alt="img not found" />
      </div>

      <div className="intro-container">
        <h3 className="intro">My name is Luther</h3>
      </div>

      <div className="intro-text-container text-containers">
        I'm a self-taught developer that has been coding in React for about
        three years. I also have experience in Firebase (a database service),
        fetching API's, & using Context. Vite is the framework being used for
        this project & here is a link to my{" "}
        <a href="https://github.com/LutherA12" className="github-link">
          Github
        </a>{" "}
        repositories. I've worked hard to ensure my codebases are scalable,
        maintainable, reuseable & DRY as far as the technical aspect & my
        current knowledge will allow, however, I believe my strongest skills are
        my soft skills. I'm a forever student that is always willing to learn &
        teach, furthermore, I have an extensive background in customer service.
        For 15 years now I've engaged with many different customers face to
        face, door to door, through emails, phone calls, & even a few written
        letters; so I'm not only experienced on how to speak to others with
        kindness, respect, & empathy, but I also know how to translate technical
        jorgon into everyday language without being condesending. I'm also
        primarily a kinesthetic learner so I very much enjoy researching &
        learning by doing.
      </div>
    </>
  );
}
