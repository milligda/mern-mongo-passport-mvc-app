// ==============================================================================
// Packages & Utils
// ==============================================================================

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import API from "./utils/API";

// ==============================================================================
// Page Components & App Level Styling
// ==============================================================================

import Root from "./components/pages/public/Root";
import Restricted from "./components/pages/protected/Restricted";
import Logout from "./components/partials/userAuth/Logout";
import logo from "./logo.svg";
import "./App.css";

// ==============================================================================
// Class - App
// Methods - userLoggedIn, userSignedUp, userLogout, privateRoute
// ==============================================================================

class App extends Component {
  state = {
    isAuthenticated: false,
    userId: ""
  };

  userLoggedIn = user => {
    this.setState({
      isAuthenticated: true,
      userId: user.data.id
    });
  };

  userSignedUp = user => {
    this.setState({
      isAuthenticated: true,
      userId: user.data.id
    });
  };

  userLogout = event => {
    API.logoutUser()
      .then(res => {
        console.log(res);
        this.setState({
          isAuthenticated: false,
          userId: ""
        });
      })
      .catch(err => console.log(err));
  };

  privateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          {this.state.isAuthenticated ? (
            <Logout onClick={this.userLogout} />
          ) : (
            ""
          )}
        </div>

        <Router>
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Root
                  {...props}
                  userSignedUp={this.userSignedUp}
                  userLoggedIn={this.userLoggedIn}
                />
              )}
            />
            <this.privateRoute
              exact
              path="/restricted"
              component={Restricted}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
