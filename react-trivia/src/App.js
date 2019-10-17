import React, { Component } from "react";
import "./App.css";
import Question from "./components/Question";

import Scoreboard from "./components/Scoreboard";

import { Provider } from "react-redux";

import store from "./store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    const Home = () => {
      return (
        <Provider store={store}>
          <div className="home">
            <div className="welcome">
              <h1>Welcome to Reactive!</h1>
            </div>
            <div className="diffBox">
              <ul id="boxes">
                <Link to="/scoreboard">
                  <div class="scoreboard">Scoreboard!</div>
                </Link>
                <Link to="/question">
                  <li>Easy</li>
                </Link>
                <Link to="/questionm">
                  <li>Medium</li>
                </Link>
                <Link to="/questionh">
                  <li>Hard</li>
                </Link>
              </ul>
            </div>
          </div>
        </Provider>
      );
    };
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/question"
                exact
                render={props => (
                  <Question {...props} difficulty={"easy"} pointMult={2} />
                )}
              />
              <Route
                path="/questionm"
                exact
                render={props => (
                  <Question {...props} difficulty={"medium"} pointMult={3} />
                )}
              />
              <Route
                path="/questionh"
                exact
                render={props => (
                  <Question {...props} difficulty={"hard"} pointMult={4} />
                )}
              />
              <Route
                path="/scoreboard"
                exact
                render={props => <Scoreboard {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
