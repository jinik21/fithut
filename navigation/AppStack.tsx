import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppScreen from "../screens/AppScreen";

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="App" component={AppScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
