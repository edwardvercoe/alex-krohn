import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Home from "./components/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioPost from "./components/Portfolio/PortfolioPost";
import Play from "./components/Play/Play";
import PlayPost from "./components/Play/PlayPost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/:slug" component={PortfolioPost} />
        <Route path="/about" component={About} />
        <Route path="/play" exact component={Play} />
        <Route path="/play/:slug" component={PlayPost} />
      </Switch>
    </Router>
  );
}

export default App;
