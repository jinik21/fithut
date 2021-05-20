import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppScreen from "../screens/AppScreen";
import AuthScreen from "../screens/AuthScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Auth">
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="App" component={AppScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
