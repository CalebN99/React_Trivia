import React, { Component } from "react";
import "./App.css";
import Question from "./components/Question";
import QuestionM from "./components/QuestionM";
import QuestionH from "./components/QuestionH";
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
            <div />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/question" exact component={Question} />
              <Route path="/questionm" exact component={QuestionM} />
              <Route path="/questionh" exact component={QuestionH} />
              <Route path="/scoreboard" exact component={Scoreboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
