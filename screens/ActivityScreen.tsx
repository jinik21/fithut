import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { RootStackParamList } from "../types";

type ActivityScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Activity"
>;
type ActivityScreenRouteProp = RouteProp<RootStackParamList, "Activity">;
interface Props {
  navigation: ActivityScreenNavigationProp;
  route: ActivityScreenRouteProp;
}

const ActivityScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 60,
          fontWeight: "bold",
          alignSelf: "flex-start",
          marginLeft: 30,
        }}
      >
        Relax,
      </Text>
      <Text
        style={{
          color: "#ccc",
          fontSize: 40,
          fontWeight: "400",
          alignSelf: "flex-start",
          marginLeft: 30,
        }}
      >
        walk around
      </Text>
      <AnimatedCircularProgress
        size={250}
        width={3}
        backgroundWidth={30}
        fill={59}
        tintColor="#ff5233"
        backgroundColor="#4D4253"
        style={{
          marginTop: 70,
        }}
      >
        {(fill) => (
          <>
            <Text
              style={{
                color: "#ccc",
                fontSize: 20,
                fontWeight: "200",
              }}
            >
              100 Steps
            </Text>
            <Text
              style={{
                color: "#ccc",
                fontSize: 20,
                fontWeight: "200",
              }}
            >
              Breathe Out
            </Text>
          </>
        )}
      </AnimatedCircularProgress>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#ccc",
            fontSize: 90,
          }}
        >
          46
        </Text>
        <Text
          style={{
            color: "#999",
            fontSize: 15,
          }}
        >
          seconds left
        </Text>
      </View>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060507",
    alignItems: "center",
    paddingTop: 50,
    padding: 10,
  },
});
