import React from "react";
import { Link } from "react-router-dom";
import Scores from "./Scores";
import { Provider } from "react-redux";
import store from "../store";
import { Container } from "reactstrap";

const Scoreboard = props => {
  return (
    <Provider store={store}>
      <div className="Scoreboard">
      <Link to="/">
                <div className="backB">Back</div>
              </Link>
        <h1>Scoreboard</h1>
       
        <h1>{props.name}</h1>
        <Container>
          <Scores />
        </Container>
      </div>
    </Provider>
  );
};

export default Scoreboard;
