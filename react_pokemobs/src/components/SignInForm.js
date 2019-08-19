import React, { Component } from "react";

class SignInForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submitLogin}>
            <label>Username:</label>
            <input type="text" placeholder="username" name="username" />    
            <label>Password:</label>
            <input type="password" placeholder="password" name="password" />    
            <button type='submit' />
        </form>
      </div>
    );
  }
}

export default SignInForm;
