import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { Container } from "reactstrap";
import "./Question.css";
import { connect } from "react-redux";
import { addItem } from "../actions/itemAction";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      questionNum: 0,
      difficulty: "easy",
      Score: 0,
      timer: 15,
      dec: 1,
      qOrder: 0,
      pointMult: 1.5,
      questionSwitch: 0,
      correctColor: "white",
      wrongColor1: "white",
      wrongColor2: "white",
      wrongColor3: "white",
      block: false
    };
  }

  componentDidMount() {
    fetch(
      `https://opentdb.com/api.php?amount=15&category=18&difficulty=${this.state.difficulty}&type=multiple`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, items: json.results });
        this.decrementTime();
        let random = Math.floor(Math.random() * 4);
      });
  }

  decrementTime() {
    setInterval(() => {
      this.setState({ timer: this.state.timer - this.state.dec });
      if (this.state.timer < 1) {
        this.setState({ timer: (this.state.timer = 0) });
      }
      if (this.state.timer === 0) {
        this.instantInc();
      }
    }, 1000);
  }

  instantInc() {
    const self = this;
    self.setState({
      questionNum: this.state.questionNum + 1,
      timer: (this.state.timer = 15),
      dec: (this.state.dec = 1)
    });
  }

  incrementQ(answer) {
    const self = this;
    if (self.state.block === true) {
      return;
    }
    self.setState({ block: (this.state.block = true) });
    console.log(self.state.block);
    let random = Math.floor(Math.random() * 4);
    if (answer) {
      self.setState({
        Score: this.state.Score + this.state.timer * this.state.pointMult
      });
    }
    self.setState({
      correctColor: (this.state.correctColor = "#00FF00"),
      dec: (this.state.dec = 0),
      pointMult: (this.state.pointMult = 0)
    });

    setTimeout(() => {
      self.setState({
        wrongColor1: (this.state.wrongColor1 = "white"),
        wrongColor2: (this.state.wrongColor2 = "white"),
        wrongColor3: (this.state.wrongColor3 = "white"),
        correctColor: (this.state.correctColor = "white"),
        questionSwitch: (this.state.questionSwitch = 1),
        questionNum: this.state.questionNum + this.state.questionSwitch,
        timer: (this.state.timer = 15),
        block: (this.state.block = false),
        dec: (this.state.dec = 1)
      });
      self.setState({ qOrder: (this.state.qOrder = random) });
      self.setState({ pointMult: (this.state.pointMult = 1.5) });
    }, 3000);
  }

  wrongColor1() {
    this.setState({ wrongColor1: (this.state.wrongColor1 = "red") });
  }
  wrongColor2() {
    this.setState({ wrongColor2: (this.state.wrongColor2 = "red") });
  }
  wrongColor3() {
    this.setState({ wrongColor3: (this.state.wrongColor3 = "red") });
  }
  setName = e => {
    this.setState({ Name: e.target.value });
  };

  render() {
    var { isLoaded, items, questionNum } = this.state;
    let item = items[questionNum];
    const stylesObj = {
      background: this.state.correctColor
    };
    const styleWrong1 = {
      background: this.state.wrongColor1
    };
    const styleWrong2 = {
      background: this.state.wrongColor2
    };
    const styleWrong3 = {
      background: this.state.wrongColor3
    };

    let mainQuestion1 = () => {
      if (this.state.questionNum > 14) {
        return (
          <Provider store={store}>
            <Container>
              <div className="Q">
                <div className="score">
                  <h1> Score: {this.state.Score}</h1>
                </div>

                <div>
                  Submit Score:
                  <input
                    type="text"
                    onChange={this.setName.bind(this)}
                    value={this.state.Name}
                    className="nameINPUT"
                    placeholder="Name"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      const newScore = {
                        Name: this.state.Name,
                        Score: this.state.Score
                      };
                      this.props.addItem(newScore);
                    }}
                    className="submitINPUT"
                  >
                    Add Score
                  </button>
                </div>
              </div>
            </Container>
          </Provider>
        );
      }
      return (
        <div className="Q">
          <div className="score">
            <h1> Score: {this.state.Score}</h1>
          </div>
          <div className="timer">Time:{this.state.timer}</div>
          <div className="Question">{item.question}</div>
          <ul id="answers">
            <li onClick={() => this.incrementQ(true)} style={stylesObj}>
              {item.correct_answer}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor1();
              }}
              style={styleWrong1}
            >
              {item.incorrect_answers[0]}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor2();
              }}
              style={styleWrong2}
            >
              {item.incorrect_answers[1]}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor3();
              }}
              style={styleWrong3}
            >
              {item.incorrect_answers[2]}
            </li>
          </ul>
        </div>
      );
    };

    let mainQuestion2 = () => {
      if (this.state.questionNum > 14) {
        return (
          <Provider store={store}>
            <Container>
              <div className="Q">
                <div className="score">
                  <h1> Score: {this.state.Score}</h1>
                </div>
                <div>
                  Submit Score:
                  <input
                    type="text"
                    onChange={this.setName.bind(this)}
                    value={this.state.Name}
                    className="nameINPUT"
                    placeholder="Name"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      const newScore = {
                        Name: this.state.Name,
                        Score: this.state.Score
                      };
                      this.props.addItem(newScore);
                    }}
                    className="submitINPUT"
                  >
                    Add Score
                  </button>
                </div>
              </div>
            </Container>
          </Provider>
        );
      }
      return (
        <div className="Q">
          <div className="score">
            <h1> Score: {this.state.Score}</h1>
          </div>
          <div className="timer">Time:{this.state.timer}</div>
          <div className="Question">{item.question.toString()}</div>
          <ul id="answers">
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor1();
              }}
              style={styleWrong1}
            >
              {item.incorrect_answers[0]}
            </li>
            <li
              onClick={() => this.incrementQ(true)}
              className="correct"
              style={stylesObj}
            >
              {item.correct_answer}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor2();
              }}
              style={styleWrong2}
            >
              {item.incorrect_answers[2]}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor3();
              }}
              style={styleWrong3}
            >
              {item.incorrect_answers[1]}
            </li>
          </ul>
        </div>
      );
    };

    let mainQuestion3 = () => {
      if (this.state.questionNum > 14) {
        return (
          <Provider store={store}>
            <Container>
              <div className="Q">
                <div className="score">
                  <h1> Score: {this.state.Score}</h1>
                </div>
                <div>
                  Submit Score:
                  <input
                    type="text"
                    onChange={this.setName.bind(this)}
                    value={this.state.Name}
                    className="nameINPUT"
                    placeholder="Name"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      const newScore = {
                        Name: this.state.Name,
                        Score: this.state.Score
                      };
                      this.props.addItem(newScore);
                    }}
                    className="submitINPUT"
                  >
                    Add Score
                  </button>
                </div>
              </div>
            </Container>
          </Provider>
        );
      }
      return (
        <div className="Q">
          <div className="score">
            <h1> Score: {this.state.Score}</h1>
          </div>
          <div className="timer">Time:{this.state.timer}</div>
          <div className="Question">{item.question.toString()}</div>
          <ul id="answers">
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor1();
              }}
              style={styleWrong1}
            >
              {item.incorrect_answers[1]}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor2();
              }}
              style={styleWrong2}
            >
              {item.incorrect_answers[0]}
            </li>
            <li
              onClick={() => this.incrementQ(true)}
              className="correct"
              style={stylesObj}
            >
              {item.correct_answer}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor3();
              }}
              style={styleWrong3}
            >
              {item.incorrect_answers[2]}
            </li>
          </ul>
        </div>
      );
    };

    let mainQuestion4 = () => {
      if (this.state.questionNum > 14) {
        return (
          <Provider store={store}>
            <Container>
              <div className="Q">
                <div className="score">
                  <h1> Score: {this.state.Score}</h1>
                </div>
                <div>
                  Submit Score:
                  <input
                    type="text"
                    onChange={this.setName.bind(this)}
                    value={this.state.Name}
                    className="nameINPUT"
                    placeholder="Name"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      const newScore = {
                        Name: this.state.Name,
                        Score: this.state.Score
                      };
                      this.props.addItem(newScore);
                    }}
                    className="submitINPUT"
                  >
                    Add Score
                  </button>
                </div>
              </div>
            </Container>
          </Provider>
        );
      }
      return (
        <div className="Q">
          <div className="score">
            <h1> Score: {this.state.Score}</h1>
          </div>
          <div className="timer">Time:{this.state.timer}</div>
          <div className="Question">{item.question.toString()}</div>
          <ul id="answers">
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor1();
              }}
              style={styleWrong1}
            >
              {item.incorrect_answers[2]}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor2();
              }}
              style={styleWrong2}
            >
              {item.incorrect_answers[1]}
            </li>
            <li
              onClick={() => {
                this.incrementQ();
                this.wrongColor3();
              }}
              style={styleWrong3}
            >
              {item.incorrect_answers[0]}
            </li>
            <li
              onClick={() => this.incrementQ(true)}
              className="correct"
              style={stylesObj}
            >
              {item.correct_answer}
            </li>
          </ul>
        </div>
      );
    };

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (this.state.qOrder === 0) {
      return <Route component={mainQuestion1} />;
    } else if (this.state.qOrder === 1) {
      return <Route component={mainQuestion2} />;
    } else if (this.state.qOrder === 2) {
      return <Route component={mainQuestion3} />;
    } else if (this.state.qOrder === 3) {
      return <Route component={mainQuestion4} />;
    }
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(Question);
