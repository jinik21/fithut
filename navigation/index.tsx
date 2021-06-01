import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import { AuthContext } from "../context/AuthContext";
import AuthStack from "./AuthStack";

const index = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
