import React from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import styled from "styled-components/native";

export default styled.TextInput`
  padding: 10px;
  height: 45px;
  width: ${width - 40};
  border-color: grey;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

