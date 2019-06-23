import React, { Component } from 'react';
import { isMobileSafari, isSafari, osVersion } from "react-device-detect";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Group1 from "./components/Group1";
import Group2 from "./components/Group2";
import Group3 from "./components/Group3";
import Links from "./components/Links";


class App extends Component {
  render() {
    // Prüfe, ob iOS device und mobile safari verwendet wird (isIOS && isMobileSafari) && osVersion === "12"
    if (isMobileSafari | isSafari && osVersion === "12.3.1") return (

      <HashRouter basename="/">
            <div className="App">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/z0rxa7k9p1" component={Group1} />
                <Route path="/gnwsusz0v2" component={Group2} />
                <Route path="/au8r3nxxb3" component={Group3} />
                <Route path="/links" component={Links} />
              </Switch>
              { osVersion }
            </div>
      </HashRouter>
    )
            // Hinweis falls nicht kompatibles Gerät verwendet wird
            return (
              <div>
                <p>Bitte nutze ein iPhone oder iPad (mind. iOS12)) und starte die Umfrage hier erneut: Link.</p>
              </div>
            )
    }
}

export default App;
