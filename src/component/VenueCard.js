import React, { Component } from "react";

class VenueCard extends Component {
  render() {
    return (
      <div className="container-venue-card">
        <h3 classname="venue-name">
          {this.props.venue.name}
        </h3>
      </div>
    );
  }
}

export default VenueCard;
