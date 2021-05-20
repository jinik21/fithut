import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { RootStackParamList } from "../types";

type AppScreenNavigationProp = StackNavigationProp<RootStackParamList, "Auth">;
type AppScreenRouteProp = RouteProp<RootStackParamList, "Auth">;
interface Props {
  navigation: AppScreenNavigationProp;
  route: AppScreenRouteProp;
}

const Auth = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>Auth Screen</Text>
      <Button title="Navigate" onPress={() => navigation.navigate("App")} />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
