import { Component } from "react";
import { CardListC, SearchBoxC } from "../../componentExports";
import { NavLink } from "react-router-dom";
import "./appclass.css";

class AppClass extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monstName) => {
      return monstName.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div>
        <NavLink
          to="/"
          style={{ fontSize: "30px", color: "var(--monster-color)" }}
        >
          Home
        </NavLink>
        <h1 className="appClassTitle">Monster Rolodex</h1>
        <SearchBoxC
          className={"monstersSearchBox"}
          onChange={onSearchChange}
          placeholder={"search monsters"}
        />
        <CardListC monsters={filteredMonsters} />
      </div>
    );
  }
}

export default AppClass;
