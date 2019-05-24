import React, { Component } from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Gallery from "./components/Gallery";


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      },
    ]
  }
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
