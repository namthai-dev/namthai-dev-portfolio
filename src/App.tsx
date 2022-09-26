import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <NavBar />
      </header>
      <div className="app__container">
        <Introduction />
      </div>
    </div>
  );
}

export default App;
