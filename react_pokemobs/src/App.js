import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import FormsContainer from "./containers/FormsContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/welcome" component={FormsContainer} />
      </Router>
    );
  }
}

export default App;