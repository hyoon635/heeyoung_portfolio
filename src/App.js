import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Navigation from "./components/Navigation"
import "./assets/style/common-style.scss"

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/projects" component={Projects}></Route>
    </HashRouter>
  );
}

export default App;
