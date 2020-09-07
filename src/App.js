import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import PortfolioPost from "./components/Portfolio/PortfolioPost";
import Play from "./pages/Play";
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
