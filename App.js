import React from "react";
import Auth from "./screens/auth";
import Home from "./screens/home";
import { KeyboardAvoidingView } from "react-native";
export default class App extends React.Component {
  state = {
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTUwODI2OTk3LCJleHAiOjE1NTM0MTg5OTd9.rueLvHAWdwx8THdAIyuqBuzrO0In50LifLSYSS-fSVg"
  };

  handleConnexion = jwt => this.setState({ jwt });

  render() {
    return this.state.jwt ? (
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
