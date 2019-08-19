import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import API from "/react_pokemobs/adapters/API.js";

class FormsContainer extends Component {
  submitLogin = () => {
    API.loginUser()
  };

  submitSignUp = () => {
      API.createUser()
  };

  render() {
    return (
      <div className="forms-container">
        <SignUpForm submitSignUp={this.submitSignUp} />
        <SignInForm submitLogin={this.submitLogin} />
      </div>
    );
  }
}

export default FormsContainer;
