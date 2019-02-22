import React from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import styled from "styled-components/native";
import Title from "./title";
import Favbutton from "./favButton";
import Icon from "react-native-vector-icons/FontAwesome";

export default ({ uri, name, tags = [], onPress = () => {} }) => (
  <>
    <View>
      <Row>
        <Icon name="user" size={25} style={{ padding: 10 }} />
        <Title>{name}</Title>
      </Row>
      <ImageCard source={{ uri }} />
      <Row>
        <ColumnLeft>
          <TextTag>{tags.map(x => `#${x}`).join(" ")}</TextTag>
        </ColumnLeft>
        <ColumnRight>
          <Favbutton name="heart" onPress={onPress} />
        </ColumnRight>
      </Row>
    </View>
  </>
);

const TextTag = styled.Text`
  margin: 16px;
  color: blue;
`;

const Row = styled.View`
  width: ${width};
  background-color: white;
  flex-direction: row;
`;

const ColumnRight = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  width: ${(width * 1) / 4};
`;

const ColumnLeft = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: ${(width * 3) / 4};
`;

const View = styled.View`
  width: ${width};
  height: ${width};
`;

const ImageCard = styled.Image`
  width: ${width};
  height: ${(width * 3) / 4};
`;
