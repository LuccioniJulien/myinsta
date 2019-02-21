import React from "react";
import { Dimensions } from "react-native";
import { Button, Input, Title } from "../widgets/index.js";
const { width, height } = Dimensions.get("window");
import styled from "styled-components/native";

export default class Register extends React.Component {
  state = {
    identifier: "",
    password: "",
    email
  };

  verifInput() {}

  render() {
    const { login, password } = this.state;
    return (
      <>
        <Title>Register</Title>
        <Input
          placeholder="Login"
          onChangeText={text => this.setState({ login: text })}
          value={login}
        />
        <Input
          placeholder="email"
          onChangeText={text => this.setState({ email: text })}
          value={password}
        />
        <Input
          placeholder="Mot de passe"
          onChangeText={text => this.setState({ password: text })}
          value={password}
        />
        <Button title="Inscription" onPress={() => {}} />
        <Button title="Connexion" onPress={() => {}} />
      </>
    );
  }
}
