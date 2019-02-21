import React from "react";
import { Login } from "../fragment";
import styled from "styled-components/native";

export default class auth extends React.Component {
  state = {
    isRegister: false
  };

  render() {
    return (
      <StyledView>
        <Login />
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
