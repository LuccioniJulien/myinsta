import React from "react";
import { TablList, TabAccount, TabPhoto } from "../fragment/index";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

const TabNavigator = createBottomTabNavigator(
  {
    Home: TablList,
    Search: TablList,
    Favoris: TablList,
    Photo: TabPhoto,
    Account: TabAccount
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let name;
        switch (routeName) {
          case "Home":
            name = "home";
            break;
          case "Search":
            name = "search";
            break;
          case "Favoris":
            name = "heart";
            break;
          case "Photo":
            name = "camera-retro";
            break;
          case "Account":
            name = "user";
            break;
        }
        return <Icon name={name} size={20} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
