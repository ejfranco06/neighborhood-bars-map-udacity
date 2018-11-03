import React, { Component } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import "./App.css";
import Map from "./component/Map";
import {simpleFetch} from "./util/foursquareAPI.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      map: null,
      mapCenter: {
          center: { lat: 40.735844, lng: -73.99056 },
          zoom: 15
      },
      google: null,
      mapLoaded: false,
      allVenues: [],      
    }
    this.setMap = this.setMap.bind(this);
    this.setVenues = this.setVenues.bind(this);
  }

  componentDidMount() {
     let location = this.state.mapCenter.center;
     simpleFetch(location, this.setVenues);

  }

  setMap(map) {
      this.setState({map});
      this.setState({mapLoaded: true});
      this.setState({google: window.google.maps});
  }

  setVenues(allVenues) {
    this.setState(allVenues);
  }



  render() {
    return (
      <div className="container-app">
      <Header />
      <div className="container-main-content">
      <SideBar map={this.state.map} mapLoaded={this.state.map} google={this.state.google} allVenues={this.state.allVenues} />
      <Map onMapLoad={this.setMap} mapCenter={this.state.mapCenter} map={this.state.map}/>
      </div>

      </div>
    );
  }
}

export default App;
