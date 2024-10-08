import { Link } from "react-router-dom";

export default function Errorpage() {
  const styles = {
    styleA: {
      textAlign: "center",
      width: "50vw",
      margin: "auto",
      marginTop: "40vh",
      fontSize: "30px",
    },
    styleB: {
      borderRadius: "10px",
      padding: "5px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.styleA}>
      <p>
        Oops!! You've found the error page 404!! Congratulations I suppose. Here
        is a button to take you back home, good luck!
      </p>

      <button type="button" style={styles.styleB}>
        <Link to="/">Click Me To Go Home</Link>
      </button>
    </div>
  );
}
