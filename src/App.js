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
      mapLoaded: false,
      venuesBar: null,
      venuesFood: null,
      venuesRecreation: null,
    }
    this.setMap = this.setMap.bind(this);
  }

  componentDidMount() {
    let location = this.state.mapCenter.center;
    let bars = simpleFetch(location, 'bar');
    this.setState({venuesBar: bars});
    let food = simpleFetch(location, 'food');
    this.setState({venuesFood: food});
    let recreation = simpleFetch(location, 'recreation');
    this.setState({venuesRecreation: recreation});
  }

  setMap(map) {
      this.setState({map});
      this.setState({mapLoaded: true});
  }



  render() {
    return (
      <div className="container-app">
      <Header />
      <div className="container-main-content">
      <SideBar/>
      <Map onMapLoad={this.setMap} mapCenter={this.state.mapCenter}/>
      </div>

      </div>
    );
  }
}

export default App;
