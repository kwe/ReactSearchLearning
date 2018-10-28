import React from "react";
import ReactDOM from "react-dom";
import SearchFrame from "./Components/SearchFrame";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SearchFrame />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
