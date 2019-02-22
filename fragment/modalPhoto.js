import React from "react";
import { Text } from "../widgets/index.js";
import { Camera, Permissions } from "expo";
import { View, Modal, Dimensions } from "react-native";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");

export default class TabPhoto extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Modal style={{ flex: 1 }} onRequestClose={() => {}}>
          <ViewCam>
            <Camera
              style={{ width, height }}
              type={this.state.type}
              ratio="4:3"
            />
          </ViewCam>
        </Modal>
      );
    }
  }
}

const WrapView = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
`;

const ViewCam = styled.View`
  flex: 1;
  width: ${width};
  height: ${(width * height) / 100};
`;

const Flip = styled.TouchableOpacity`
  flex: 0.1;
  align-self: flex-end;
  align-items: center;
`;
