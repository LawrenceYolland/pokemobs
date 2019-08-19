import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const FormsContainer = ({ submitSignUp, submitSignIn }) => {
  return (
    <div className="forms-container">
      <SignUpForm submitSignUp={submitSignUp} />
      <SignInForm submitSignIn={submitSignIn} />
    </div>
  );
};

export default FormsContainer;
