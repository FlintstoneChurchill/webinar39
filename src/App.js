import React from 'react';
import {Switch, Route, NavLink} from "react-router-dom";
import './App.css';
import Main from "./containers/Main";
import About from "./containers/About";

function App() {
  return (
    <>
      <div className="container">
        <header style={{textAlign: "center"}}>
          <NavLink to="/">Main</NavLink>
          |
          <NavLink to="/about">About</NavLink>
        </header>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/about" component={About} exact/>
        </Switch>
      </div>
    </>
  );
}

export default App;
