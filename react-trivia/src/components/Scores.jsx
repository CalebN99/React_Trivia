import React, { Component } from "react";
import "./scores.css";
import { connect } from "react-redux";
import { getItems, addItem } from "../actions/itemAction";
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
          {items.map(({ _id, Name, Score }) => (
            <div key={_id} class="score">
              Name: <span class="nameSpan">{Name}</span>
              <span class="scoreSpan"> Score: {Score}</span>
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
