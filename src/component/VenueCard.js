import React, { Component } from "react";

class VenueCard extends Component {
  constructor(props) {
    super(props);
    this.marker = null;
    this.infoWindow = null;
    this.markerBounce = this.markerBounce.bind(this);
    this.focusMarker = this.focusMarker.bind(this);
    this.openInfoWindow = this.openInfoWindow.bind(this);
  }

  componentDidMount() {
    this.createMarker();
    this.createInfoWindow();
  }

  componentDidUpdate(prevProps) {
    if (this.props.map) {
      if (this.props.map !== prevProps.map) {
        this.createMarker();
        this.createInfoWindow();
      }
    }
  }

  componentWillUnmount() {
    this.removeMarker();
  }

  createMarker() {
    if (!this.props.map) {
      console.log("no map");
      return;
    }
    if (!this.marker) {
      const venue = this.props.venue;
      const lat = venue.location.lat;
      const lng = venue.location.lng;
      const postitionTemp = { lat: lat, lng: lng };
      this.marker = new window.google.maps.Marker({
        position: postitionTemp,
        map: this.props.map,
        animation: window.google.maps.Animation.DROP,
        title: venue.name
      });
      this.marker.addListener("click", this.markerBounce);
      this.marker.addListener("click", this.openInfoWindow);
    } else {
      this.marker.setMap(this.props.map);
    }
  }

  createInfoWindow() {
    if (!this.props.map) {
      return;
    }
    const venue = this.props.venue;
    const name = venue.name || "no name available";
    const address =
      venue.location.formattedAddress.join(" ") || "no address available";
    const type = venue.categories[0].name || "no type available";
    const contentString = `<div class="container-infowindow">
                        <p><strong>Name:</strong> ${name} <br></p>
                        <p><strong>Address:</strong> ${address} <br><p>
                        <p><strong>Type:</strong> ${type} <br></p>
                    </div>`;
    this.infoWindow = new window.google.maps.InfoWindow({
      content: contentString
    });
  }

  removeMarker() {
    this.marker.setMap(null);
  }

  markerBounce() {
    if (!this.marker) {
      return;
    }
    this.marker.setAnimation(window.google.maps.Animation.BOUNCE);
    window.setTimeout(() => this.marker.setAnimation(null, 1500));
  }

  focusMarker() {
    const map = this.props.map;
    if (map) {
      map.panTo(this.marker.getPosition());
      map.setZoom(20);
      this.markerBounce();
    }
  }

  openInfoWindow() {
    if (!this.infoWindow || !this.marker) {
      return;
    }
    this.infoWindow.open(this.props.map, this.marker);
  }

  render() {
    return (
      <div className="container-venue-card" onClick={this.focusMarker}>
        <h3 className="venue-name">{this.props.venue.name}</h3>
      </div>
    );
  }
}

export default VenueCard;
