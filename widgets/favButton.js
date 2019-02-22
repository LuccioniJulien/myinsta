import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default ({ name, onPress }) => (
  <Button onPress={onPress}>
    <Icon name={name} size={25} />
  </Button>
);

const Button = styled.TouchableOpacity`
  margin: 16px;
`;
