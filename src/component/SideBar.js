import React, { Component } from 'react';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(event) {
    this.setState({ query: event.target.value.trim()});
  }

  render() {
    return(
      <div className="SideBar">
      <input
        type="text"
        placeholder="Search for"
        onChange={this.updateQuery}
      />
      <h2>What is the state {this.state.query}</h2>
      </div>
    );
  }
}

export default SideBar;
