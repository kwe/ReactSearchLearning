import React from "react";
import ReactDOM from "react-dom";
import SearchFrame from "./Components/SearchFrame";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <SearchFrame />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
