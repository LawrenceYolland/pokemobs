import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

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
        <Form onSubmit={e => this.handleSubmit(e)} v>
          <Form.Field required>
            <label>Username:</label>
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            />
          </Form.Field>
          <Form.Field required>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
          </Form.Field>
          <Button type="submit" fluid>sign up</Button>
        </Form>
      </div>
    );
  }
}

export default SignUpForm;
