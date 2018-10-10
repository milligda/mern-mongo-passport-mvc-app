// ==============================================================================
// Package Imports & Utils
// ==============================================================================

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../../utils/API";

// ==============================================================================
// Partial Components & Component Styling
// ==============================================================================

// ==============================================================================
// Class - Signup
// Methods - handleInputChange, handleFormSubmit
// ==============================================================================

class Signup extends Component {
  state = {
    username: "",
    password: "",
    redirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.signupUser({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.userSignedUp(res);
        this.setState({ redirect: true });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/restricted" />;
    } else {
      return (
        <div className="signup-container">
          <h2>Signup:</h2>
          <form>
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username (required)"
            />

            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              name="password"
              placeholder="Password (required)"
            />

            <button onClick={this.handleFormSubmit} id="signup">
              Signup
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Signup;
