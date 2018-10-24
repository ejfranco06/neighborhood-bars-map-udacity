import React, { Component } from "react";
import VenueCard from "./VenueCard";

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
    let venues = [];
    if(this.props.allVenues){
      venues = this.props.allVenues
    }
    return (
      <div className="container-sidebar">
        <select>
          <option value="bar">bar</option>
          <option value="restaurant">restaurant</option>
          <option value="noFilter" default>Select a filter</option>

        </select>
        <h2>What is the state {this.state.query}</h2>
        <ul className="list-venues">
          {venues.map(venue => <VenueCard id={venue.id} venue={venue} />)}
        </ul>
      </div>
    );
  }
}

export default SideBar;
