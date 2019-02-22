import React from "react";
import { Card } from "../widgets";
import { fetchPost } from "../api";
import { FlatList } from "react-native";
import styled from "styled-components/native";
export default class TablFav extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Home!"
  };

  state = {
    list: []
  };

  async getPost() {
    try {
      const response = await fetchPost();
      const list = response.map(x => {
        return {
          key: `${x.id}`,
          url: x.image.url,
          username: x.user.username,
          tags: x.tags
        };
      });
      this.setState({ list });
    } catch (error) {
      console.log(error);
    }
  }

  getTag(arrayTag) {
    return arrayTag ? arrayTag : ["noTag"];
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    return (
      <>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => (
            <Card uri={item.url} name={item.username} tags={item.tags} />
          )}
        />
      </>
    );
  }
}
