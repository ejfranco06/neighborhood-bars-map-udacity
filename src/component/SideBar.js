import React, { Component } from "react";
import VenueCard from "./VenueCard";

/*
  Sidebar provides a list of venues to select from
*/
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filteredVenues: []
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  /*
    update the query state
  */
  updateQuery(event) {
    const newQuery = event.target.value.trim();
    const allVenues = this.props.allVenues;
    this.setState({ query: event.target.value.toLowerCase().trim() });
    if (!newQuery) {
      this.setState({ filteredVenues: [] });
    } else {
      const temp = allVenues.filter(venue =>
        venue.name.toLowerCase().includes(newQuery)
      );
      this.setState({ filteredVenues: temp });
    }
  }

  render() {
    let venues = this.props.allVenues;
    if (this.state.query) {
      venues = this.state.filteredVenues;
    }

    return (
      <div
        className="container-sidebar"
        role="contentinfo"
        aria-label="List of Venues"
      >
        <input
          type="search"
          name="filter"
          className="input-field"
          onChange={this.updateQuery}
          placeholder="Filter locations..."
          aria-label="Search through venues"
        />
        <ul className="list-venues">
          {venues.map(venue => (
            <VenueCard
              key={venue.id}
              venue={venue}
              map={this.props.map}
              tabIndex="0"
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SideBar;
