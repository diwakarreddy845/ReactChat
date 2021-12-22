import React from "react";

import { connect } from "react-redux";

import { activateGeod, closeGeod, nameChane } from "./action/actions";

// App.js
export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: String(""),
      new: "",
    };
  }

  increment() {
    this.setState({
      word: this.state.word + this.state.new,
      new: "",
    });
  }

  handleChange(value) {
    this.setState({
      new: value,
    });
  }

  render() {
    return (
      <div className="row">
        <h1> "Hello World!"</h1>

        <input
          className="col-12"
          type="text"
          value={this.state.new}
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <div className="col=12">
          <label className="mr-10">Text</label>
          <input
            className="col-6"
            type="text"
            value={this.state.new}
            onChange={(event) => this.handleChange(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
  nameChane,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
