import React from "react";
import { Button, Input, Title } from "../widgets/index.js";
import { fetchRegister } from "../api";
import Toast, { DURATION } from "react-native-easy-toast";

export default class Register extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  register = async () => {
    try {
      await fetchRegister(this.state);
      this.refs.toast.show(
        "Inscription réussi, vous pouvez maintenant vous connecter",
        DURATION.LENGTH_LONG
      );
      this.setState({ username: "", password: "", email: "" });
    } catch (error) {
      this.refs.toast.show(error);
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
          textContentType="password"
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
