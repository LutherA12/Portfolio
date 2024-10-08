import { Component } from "react";
import "./classSearchBox.css";

class SearchBoxC extends Component {
  render() {
    return (
      <div>
        <input
          className={`searchBox ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SearchBoxC;
