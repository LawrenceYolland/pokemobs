import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import API from "../adapters/API.js";

class FormsContainer extends Component {
  // submitLogin = () => {
  //   API.loginUser()
  // };

  submitSignUp = user => {
      API.createUser(user)
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
