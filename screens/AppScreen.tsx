import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { RootStackParamList } from "../types";

type AppScreenNavigationProp = StackNavigationProp<RootStackParamList, "App">;
type AppScreenRouteProp = RouteProp<RootStackParamList, "App">;
interface Props {
  navigation: AppScreenNavigationProp;
  route: AppScreenRouteProp;
}

const AppScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>App Screen</Text>
      <Button title="Navigate" onPress={() => navigation.navigate("Auth")} />
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
