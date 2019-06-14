import React, { Component } from 'react';
import {  BrowserView,  MobileView,  isBrowser,  isMobile, isIOS, isMobileSafari, isSafari, isChrome} from "react-device-detect";
import './App.css';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Buttons from "./components/Buttons";
import Viewer from "./components/Viewer";
import Description from "./components/Description";
import ThreeDimensions from "./components/ThreeDimensions";
import ModelViewer from './components/ModelViewer';


class App extends Component {
  render() {
    // Prüfe, ob iOS device und mobile safari verwendet wird (isIOS && isMobileSafari)
    if (isMobileSafari | isSafari) return (
            <div className="App">
              <div className="Container">
                    <Header/>
                    <Gallery/>
                    <Buttons/>
                    <ModelViewer/>
                    <Description/>
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
