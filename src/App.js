import React, { Component } from "react";
import Board from "./Board";
import "./App.css";
import Cell from "./Cell";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <Board />
    );
  }
}

export default App;
