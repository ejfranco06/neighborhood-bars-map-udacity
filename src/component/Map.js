import React, { Component } from "react";

/*
  Map displays google map
*/
class Map extends Component {
  componentDidMount() {
    if (!window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://maps.google.com/maps/api/js?key=AIzaSyA7BH8S1VxOXBBv818huIKnfEpWGtvAIRQ";
      script.async = true;
      script.defer = true;
      const x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(script, x);
      script.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  /*
    Initates google maps
  */
  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById("map"),
      this.props.mapCenter
    );
    this.props.onMapLoad(map);
  }

  render() {
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        id="map"
        aria-label="Map"
        role="application"
        className="container-map"
      />
    );
  }
}

export default Map;
