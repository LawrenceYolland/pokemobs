import React, { Component } from "react";

class SignInForm extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.props.submitLogin}>
            <label>Username:</label>
            <input type="text" placeholder="username" name="username" />    
            <label>Password:</label>
            <input type="password" placeholder="password" name="password" />    
            <button type='submit'>login</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
