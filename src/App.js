import React, { Component } from 'react';
import {  BrowserView,  MobileView,  isBrowser,  isMobile, isIOS, isMobileSafari} from "react-device-detect";
import './App.css';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Buttons from "./components/Buttons";
import Description from "./components/Description";


class App extends Component {
  render() {
    // Prüfe, ob iOS device und mobile safari verwendet wird
    if (isIOS && isMobileSafari) return (
            <div className="App">
              <div className="Container">
                    <Header />
                    <Gallery />
                    <Buttons />
                    <Description />
              </div>
            </div>
    )
            // Hinweis falls nicht kompatibles Gerät verwendet wird
            return (
              <div>Bitte nutze ein iOS (Apple) Geräte und starte die Umfrage erneut.</div>
            )
    }
}

export default App;
