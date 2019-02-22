import React from "react";
import Auth from "./screens/auth";
import Home from "./screens/home";
import { KeyboardAvoidingView } from "react-native";
export default class App extends React.Component {
  state = {
    isConnected: false
  };

  handleConnexion = (isConnected = true) => this.setState({ isConnected });

  render() {
    return this.state.isConnected ? (
      <Home />
    ) : (
      <Auth connexion={this.handleConnexion} />
    );
    // <KeyboardAvoidingView
    //   style={{
    //     backgroundColor: " #fff",
    //     alignItems: "center",
    //     justifyContent: "center"
    //   }}
    //   behavior="padding"
    //   enabled={true}
    // >

    // </KeyboardAvoidingView>
  }
}
