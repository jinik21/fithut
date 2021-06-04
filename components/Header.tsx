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
import { Feather } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const { width } = Dimensions.get("window");

interface Props {
  navigation: DrawerNavigationProp<RootStackParamList>;
  title: string | null;
  isActivity?: Boolean;
}

const Header = ({ navigation, title, isActivity }: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#cccccc" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: "#cccccc" }}>{title}</Text>
      {!isActivity ? (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={30} color="grey" />
        </TouchableOpacity>
      ) : (
        // <Entypo name="dots-three-horizontal" size={24} color="#cccccc" />
        <View
          style={{
            flex: 0,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Entypo name="flag" size={24} color="#ff5233" />
          <Text
            style={{
              fontSize: 15,
              color: "#ccc",
            }}
          >
            Finish Workout
          </Text>
        </View>
      )}
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
