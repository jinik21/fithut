import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={24} color="#cccccc" />
      <Text style={{ fontSize: 20, color: "#cccccc" }}>Profile</Text>
      <Entypo name="dots-three-horizontal" size={24} color="#cccccc" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 50,
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
