import React from "react";
import { fetchLogin } from "../api";
import { Button, Input, Title } from "../widgets/index.js";
import Toast from "react-native-easy-toast";
import User from "../lib/user";
import styled from "styled-components/native";

export default class Login extends React.Component {
  state = {
    identifier: "",
    password: ""
  };

  login = async () => {
    try {
      const { jwt } = await fetchLogin(this.state);
      if (!jwt) throw "no token";
      User.getInstance().setUserToken(jwt);
      this.props.connexion();
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
        <Button title="Inscription" onPress={() => this.props.changeView()} />
      </>
    );
  }
}
