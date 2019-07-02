import React, { Component } from 'react';
import { isMobileSafari, isSafari, osVersion } from "react-device-detect";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Group1 from "./components/Group1";
import Group11  from "./components/Group11";
import Group2 from "./components/Group2";
import Group21 from "./components/Group21";
import Group3 from "./components/Group3";
import Group31 from "./components/Group31";
import Group4 from "./components/Group4";
import Links from "./components/Links";
import ModelViewer from './components/ModelViewer';
import ModelViewerAR from './components/ModelViewerAR';


class App extends Component {
  render() {
    // Prüfe, ob der User ein kompatibles iOS device verwendet (iPhone, iPad, iPod mit iOS 12 oder höher)
    // if(/(iPhone|iPad|iPod)\sOS\s12/.test(navigator.userAgent))
    if(isSafari) return (
      <HashRouter basename="/">
            <div className="App">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/z0rxa7k9p1" component={Group1} />
                <Route path="/toswg95b31" component={Group11} />
                <Route path="/gnwsusz0v2" component={Group2} />
                <Route path="/01w5b1lxb2" component={Group21} />
                <Route path="/au8r3nxxb3" component={Group3} />
                <Route path="/t1kl07iwz3" component={Group31} />
                <Route path="/h25d921we4" component={Group4} />
                <Route path="/2dpighli3d" component={ModelViewer} />
                <Route path="/ef0kij1par" component={ModelViewerAR} />
                <Route path="/links" component={Links} />
              </Switch>
            </div>
      </HashRouter>
    )
            // Falls ein inkompatibles Gerät verwendet wurde, zeige folgende Fehlermeldung:
            return (
              <div>
                <p>Bitte öffne die Umfrage auf einem iPhone, iPad oder iPod (iOS12 oder höher) im Safari Browser und starte die Umfrage erneut.</p>
              </div>
            )
    }
}

export default App;
