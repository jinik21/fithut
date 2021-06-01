import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        options={{
          header: () => null,
        }}
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{
          header: () => null,
        }}
        name="Register"
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
