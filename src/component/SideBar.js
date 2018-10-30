import React, { Component } from "react";
import VenueCard from "./VenueCard";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filteredVenues: []
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(event) {

    const newQuery = event.target.value.trim();
    const allVenues = this.props.allVenues;
    this.setState({ query: event.target.value.toLowerCase().trim() });
    if(!newQuery) {
      this.setState({filteredVenues: []});
    } else {
      const temp = allVenues.filter(venue => venue.name.toLowerCase().includes(newQuery));
      this.setState({filteredVenues: temp});
    }
  }

  render() {
      let venues = this.props.allVenues;
      if(this.state.query){
        venues = this.state.filteredVenues;
      }

    return (
      <div className="container-sidebar">
        <input type="search" name="filter" onChange={this.updateQuery} placeholder="Filter locations..."
               aria-label="Search through venues">

        </input>
        <h2>What is the state {this.state.query}</h2>
        <ul className="list-venues">
          {venues.map(venue => <VenueCard key={venue.id} venue={venue} map={this.props.map} google={this.props.google} />)}
        </ul>
      </div>
    );
  }
}

export default SideBar;
