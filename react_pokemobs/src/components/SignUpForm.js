import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitSignUp(this.state);
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
