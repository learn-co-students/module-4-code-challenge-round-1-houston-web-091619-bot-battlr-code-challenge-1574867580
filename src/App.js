import React, { Component } from "react";
import BotsPage from "./containers/BotsPage"; // app is only importing the bots page since it is a parent
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage /> 
      </div>
    );
  }
}

export default App;
