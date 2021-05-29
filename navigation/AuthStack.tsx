import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../components/Header";
import AppScreen from "../screens/AppScreen";
import AuthScreen from "../screens/AuthScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Profile">
      <AuthStack.Screen
        name="Profile"
        options={{
          header: () => <Header />,
          headerTransparent: true,
        }}
        component={ProfileScreen}
      />
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="App" component={AppScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
