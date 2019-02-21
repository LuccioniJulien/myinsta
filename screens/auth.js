import React from "react";
import { Login, Register } from "../fragment";
import styled from "styled-components/native";

export default class auth extends React.Component {
  state = {
    isRegister: false
  };

  changeView = (isRegister = true) => {
    this.setState({ isRegister });
  };

  render() {
    return (
      <StyledView>
        {this.state.isRegister ? (
          <Register changeView={this.changeView} />
        ) : (
          <Login changeView={this.changeView} connexion={this.props.connexion} />
        )}
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
