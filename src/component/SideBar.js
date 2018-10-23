import React, { Component } from "react";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(event) {
    this.setState({ query: event.target.value.trim() });
  }

  render() {
    return (
      <div className="container-sidebar">
        <select>
          <option value="bar">bar</option>
          <option value="restaurant">restaurant</option>
          <option value="noFilter" default>Select a filter</option>

        </select>
        <h2>What is the state {this.state.query}</h2>
      </div>
    );
  }
}

export default SideBar;
