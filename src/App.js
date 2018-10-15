import React, { Component } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import "./App.css";
import Map from "./component/Map";

class App extends Component {
  constructor() {
    super();
    this.state = {
      map: '',
      mapCenter: {
          center: { lat: 40.7159357, lng: -73.9868057 },
          zoom: 15
      }
    }
    this.setMap = this.setMap.bind(this);
  }

  setMap(map) {
      this.setState({map});
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
