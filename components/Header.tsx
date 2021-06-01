import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

const { width } = Dimensions.get("window");

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
  title: string;
}

const Header = ({ navigation, title }: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#cccccc" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: "#cccccc" }}>{title}</Text>
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
