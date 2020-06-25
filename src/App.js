import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Home from "./components/Home";
import About from "./components/About/About";
import PortfolioPost from "./components/Portfolio/PortfolioPost";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/:id" component={PortfolioPost} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
