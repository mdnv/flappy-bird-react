import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./static_pages/Home";
import About from "./static_pages/About";
import Contact from "./static_pages/Contact";
import Help from "./static_pages/Help";
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
        <NavLink exact id="logo" to="/">manh nguyen</NavLink>
          <nav>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <ul className="nav navbar-nav navbar-right collapse navbar-collapse"
                id="bs-example-navbar-collapse-1">
              <li><NavLink exact to="/">Home</NavLink></li>
              {/*<li><NavLink to="/articles">Articles</NavLink></li>*/}
              <li><NavLink to="/help">Help</NavLink></li>
              {/*<li><a href="/login">Log in</a></li>*/}
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/help" component={Help}/>
        <footer className="footer">
          <small>
            Copyright ©2020 All rights reserved
          </small>
          <nav>
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><a href="https://reactjs.org/blog/" target="_blank">News</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
