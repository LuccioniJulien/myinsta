import React from "react";
import { Card } from "../widgets";
import mFetch from "../lib/mFetch";
import { FlatList } from "react-native";
import styled from "styled-components/native";
export default class TablFav extends React.Component {
  state = {
    list: []
  };

  async getPost() {
    try {
      const response = await mFetch("https://m-insta.herokuapp.com/posts", {
        jwt: this.props.jwt
      });
      const list = response.map(x => {
        return { key: `${x.id}`, url: x.image.url };
      });
      this.setState({ list });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    return (
      <ViewCard>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <Card uri={item.url} />}
        />
      </ViewCard>
    );
  }
}

const ViewCard = styled.View`
  align-items: center;
`;
