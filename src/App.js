import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Gallery from "./components/Gallery";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
              <Header />
              <Gallery />
        </div>
      </div>
    );
  }
}
export default App;
