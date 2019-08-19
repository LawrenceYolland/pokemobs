import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import API from "../adapters/API.js";

class FormsContainer extends Component {

  submitSignUp = user => API.signUpUser(user)
  
  submitSignIn = user => API.signInUser(user)
   
  render() {
    return (
      <div className="forms-container">
        <SignUpForm submitSignUp={this.submitSignUp} />
        <SignInForm submitSignIn={this.submitSignIn} />
      </div>
    );
  }
}

export default FormsContainer;
