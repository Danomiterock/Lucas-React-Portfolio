import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Bio from "./component/Bio";
import Header from "./component/Navbar";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";

export default function App() {
  return (
    <Router>
      <div>
    <Header/>


  

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Bio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
