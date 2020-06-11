import React from "react";
import "./styles/App.css";

import Header from "./common/header";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
