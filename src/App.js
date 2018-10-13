import React, { Component } from 'react';
import Header from './component/Header';
import SideBar from './component/SideBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
        <SideBar /> 
        </div>
      </div>
    );
  }
}

export default App;
