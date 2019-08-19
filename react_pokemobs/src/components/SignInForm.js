import React, { Component } from "react";

class SignInForm extends Component {
  
  state = {
    username: "",
    password: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitSignIn(this.state)
  }
  
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>    
            <label>Password:</label>
            <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>    
            <button type='submit'>login</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
