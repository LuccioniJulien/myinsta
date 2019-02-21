import React from "react";
import { Dimensions } from "react-native";
import { Button, Input, Title } from "../widgets/index.js";
import mFetch from "../lib/mFetch";
import Toast, { DURATION } from "react-native-easy-toast";
import styled from "styled-components/native";

export default class Register extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  register = async () => {
    try {
      const json = await mFetch(
        "https://m-insta.herokuapp.com/auth/local/register",
        {
          method: "POST",
          body: this.state
        }
      );
      this.refs.toast.show(
        "Inscription réussi, vous pouvez maintenant vous connecter",
        DURATION.LENGTH_LONG
      );
      this.setState({ username: "", password: "", email: "" });
    } catch (error) {
      this.refs.toast.show(error, DURATION.LENGTH_LONG);
    }
  };

  render() {
    const { username, password, email } = this.state;
    return (
      <>
        <Toast ref="toast" position="top" />
        <Title>Inscription</Title>
        <Input
          placeholder="Login"
          onChangeText={text => this.setState({ username: text })}
          value={username}
        />
        <Input
          placeholder="Email"
          onChangeText={text => this.setState({ email: text })}
          value={email}
        />
        <Input
          placeholder="Mot de passe"
          onChangeText={text => this.setState({ password: text })}
          value={password}
        />
        <Button title="Inscription" onPress={this.register} />
        <Button
          title="Connexion"
          onPress={() => {
            this.props.changeView(false);
          }}
        />
      </>
    );
  }
}
