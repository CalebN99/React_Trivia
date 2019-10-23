import React, { Component } from "react";
import "./scores.css";
import { connect } from "react-redux";
import { getItems } from "../actions/itemAction";
import PropTypes from "prop-types";

import { Provider } from "react-redux";

import store from "../store";

class Scores extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Provider store={store}>
        <div class="scorelist">
          {items.map(({ _id, Name, Score, Category }) => (
            <div key={_id} class="score">
              <div>Name: {Name}</div>

              <div>Score: {Score}</div>
              <div>Category: {Category}</div>
            </div>
          ))}
        </div>
      </Provider>
    );
  }
}

Scores.propTypes = {
  getItems: PropTypes.func.isRequired,
  Item: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(Scores);
