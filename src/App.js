import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Ceramics from "./components/Ceramics/Ceramics";
import About from "./components/About/About";
import Illustration from "./components/Illustration/Illustration";

function App() {
  return (
    <Router>
      <Link to="/">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          alt="Alexandria Logo"
        />
      </Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <div className="app__wrapper">
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/illustration">
            <Illustration />
          </Route>
          <Route path="/ceramics">
            <Ceramics />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
