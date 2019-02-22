import React from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import styled from "styled-components/native";
import Title from "./title";
import Icon from "react-native-vector-icons/FontAwesome";

export default ({ uri }) => (
  <View>
    <Title>Title</Title>
    <ImageCard source={{ uri }} />
    <Row>
      {/* <Icon name="hearth" size={20}/> */}
    </Row>
  </View>
);

const Row = styled.View`
  width: ${width};
  height: ${(((width * 3) / 4) * 1) / 6};
  background-color: black;
`;

const View = styled.View`
  width: ${width};
  height: ${width};
`;

const ImageCard = styled.Image`
  width: ${width};
  height: ${(width * 3) / 4};
`;
