import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./components/parentToChild/Parent";


class App extends Component {
  constructor() {
    super();
    this.state = ({
      title: "parent"
    });
  }

  changeTitle(newTitle) {
    this.setState({
      title: newTitle
    });
  }

  render() {
    // changeTitle is a method in parent and it passed to the child as a doSomething method
    return (
      <Parent
        doSomething={this.changeTitle.bind(this,"Child")}
        title={this.state.title}
      />
    );
  }
}

export default App;
