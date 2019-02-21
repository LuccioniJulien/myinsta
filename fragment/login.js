import React from "react";
import { Dimensions } from "react-native";
import { Button, Input, Title } from "../widgets/index.js";
const { width, height } = Dimensions.get("window");
import styled from "styled-components/native";

export default class Login extends React.Component {
  state = {
    login: "",
    password: ""
  };

  verifInput() {}

  render() {
    const { login, password } = this.state;
    return (
      <>
        <Title>Login</Title>
        <Input
          name="login"
          placeholder="Login"
          onChangeText={text => this.setState({ login: text })}
          value={login}
        />
        <Input
          name="password"
          placeholder="Mot de passe"
          onChangeText={text => this.setState({ password: text })}
          value={password}
        />
        <Button title="Connexion" onPress={() => {}} />
        <Button title="Inscription" onPress={() => {}} />
      </>
    );
  }
}
