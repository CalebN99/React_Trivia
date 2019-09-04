import React, { Component } from "react";
import "./Scoreboard.css";
import Scores from "./Scores";
import { Provider } from "react-redux";
import store from "../store";
import ItemModal from "./ItemModal";
import { Container } from "reactstrap";

class Scoreboard extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <Provider store={store}>
        <div className="Scoreboard">
          <h1>Scoreboard</h1>
          <Container>
            <Scores />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default Scoreboard;
