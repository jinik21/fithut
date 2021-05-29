import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppScreen from "../screens/AppScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="App">
      <AppStack.Screen name="App" component={AppScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
