import React from "react";
import Auth from "./screens/auth";
import Home from "./screens/home";

export default class App extends React.Component {
  state = {
    jwt: true
  };

  handleConnexion = jwt => this.setState({ jwt });

  render() {
    return this.state.jwt ? (
      <Home />
    ) : (
      <Auth connexion={this.handleConnexion} />
    );
  }
}
