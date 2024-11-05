import { Component, React } from "react";
import "./classCard.css";

class CardC extends Component {
  render() {
    const { id, name, email } = this.props.monstersProp;
    return (
      <div className="cardContainer" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardC;
