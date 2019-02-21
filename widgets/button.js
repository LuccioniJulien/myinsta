import React from "react";
import { Dimensions, Text } from "react-native";
const { width } = Dimensions.get("window");
import styled from "styled-components/native";

export default ({ title, onPress }) => (
  <Button onPress={onPress}>
    <Text>{title}</Text>
  </Button>
);

const Button = styled.TouchableOpacity`
  height: 42px;
  width: ${width - 40};
  background-color: #faac58;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
