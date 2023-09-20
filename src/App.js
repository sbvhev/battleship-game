import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Battleship</h1>
        <Board />
      </div>
    </Provider>
  );
}

export default App;
