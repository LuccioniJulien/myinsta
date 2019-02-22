import React from "react";
import { Dimensions } from "react-native";
import { Button, Input, Title } from "../widgets/index.js";
import mFetch from "../lib/mFetch";
import Toast from "react-native-easy-toast";
import styled from "styled-components/native";

export default class Login extends React.Component {
  state = {
    identifier: "",
    password: ""
  };

  verifInput() {}

  login = async () => {
    try {
      const json = await mFetch("https://m-insta.herokuapp.com/auth/local", {
        method: "POST",
        body: this.state
      });
      console.log(json);
      if (!json.jwt) throw "no token";
      this.props.connexion(json.jwt);
    } catch (error) {
      this.refs.toast.show(error);
    }
  };

  render() {
    const { identifier, password } = this.state;
    return (
      <>
        <Toast ref="toast" position="top" />
        <Title>Login</Title>
        <Input
          name="login"
          placeholder="Login"
          onChangeText={text => this.setState({ identifier: text })}
          value={identifier}
        />
        <Input
          name="password"
          placeholder="Mot de passe"
          onChangeText={text => this.setState({ password: text })}
          value={password}
          textContentType="password"
        />
        <Button title="Connexion" onPress={this.login} />
        <Button
          title="Inscription"
          onPress={() => {
            this.props.changeView();
          }}
        />
      </>
    );
  }
}
