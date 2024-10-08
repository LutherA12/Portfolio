import { Component } from "react";
import "./classCardList.css";
import { CardC } from "../../componentExports.jsx";

class CardListC extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="cardList">
        {monsters.map((monster, key) => {
          return <CardC key={key} monstersProp={monster} />;
        })}
      </div>
    );
  }
}

export default CardListC;
