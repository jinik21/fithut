import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../components/Header";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import AuthScreen from "../screens/AuthScreen";
import LandingScreen from "../screens/LandingScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Landing">
      <AuthStack.Screen
        name="Landing"
        options={{
          header: () => null,
        }}
        component={LandingScreen}
      />
      <AuthStack.Screen
        name="Profile"
        options={{
          header: () => <Header />,
          headerTransparent: true,
        }}
        component={ProfileScreen}
      />
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
