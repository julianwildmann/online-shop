import React, { Component } from 'react';
import {  BrowserView,  MobileView,  isBrowser,  isMobile, isIOS, isMobileSafari, isSafari, isChrome} from "react-device-detect";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Group1 from "./components/Group1";
import Group2 from "./components/Group2";
import Group3 from "./components/Group3";
import Links from "./components/Links";


class App extends Component {
  render() {
    // Prüfe, ob iOS device und mobile safari verwendet wird (isIOS && isMobileSafari)
    if (isMobileSafari | isSafari) return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
              <Switch>
                <Route path="/z0rxa7k9p1" component={ Group1 } />
                <Route path="/gnwsusz0v2" component={ Group2 } />
                <Route path="/au8r3nxxb3" component={ Group3 } />
                <Route path="/links" component={ Links } />
              </Switch>
              <p>Unter folgendem Link können Sie an der Umfrage zu meiner Masterarbeit teilnehmen: Insert Link</p>


            </div>
      </BrowserRouter>
    )
            // Hinweis falls nicht kompatibles Gerät verwendet wird
            return (
              <div>Bitte nutze ein iOS (Apple) Geräte und starte die Umfrage erneut.</div>
            )
    }
}

export default App;
