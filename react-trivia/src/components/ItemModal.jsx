import React, { Component } from "react";

import { connect } from "react-redux";
import { addItem } from "../actions/itemAction";

class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Name: "",
      Score: 12
    };
  }

  setName = e => {
    this.setState({ Name: e.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.setName} value={this.state.Name} />
        <button
          onClick={() => {
            const newScore = {
              Name: this.state.Name,
              Score: this.state.Score
            };
            this.props.addItem(newScore);
          }}
        >
          Add Score
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
