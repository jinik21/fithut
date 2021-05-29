import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface Props {
  val: String;
  type: String;
}

const emoji = {
  bpm: "❤",
  kcal: "🔥",
  hrs: "💤",
};

const Blobs = ({ type, val }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 23 }}>{emoji[type]}</Text>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text style={styles.textStyles}>{val}</Text>
        <Text style={{ color: "#999999", marginLeft: 2, marginBottom: 2 }}>
          {type}
        </Text>
      </View>
    </View>
  );
};

export default Blobs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4D4253",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    width: width / 2.5,
    marginVertical: 10,
  },
  textStyles: {
    color: "#cccccc",
    fontSize: 25,
  },
});
