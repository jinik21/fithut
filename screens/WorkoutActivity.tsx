import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import Video from "../components/Video";
import { RootStackParamList } from "../types";

type VideoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Video"
>;
type VideoScreenRouteProp = RouteProp<RootStackParamList, "Video">;
interface Props {
  navigation: VideoScreenNavigationProp;
  route: VideoScreenRouteProp;
}

const VidArray = [
  {
    time: "4:46",
    name: "Punch",
  },
  {
    time: "5:50",
    name: "Kick",
  },
  {
    time: "1:20",
    name: "Flay",
  },
];

const VideoScreen = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.firstBox}>
        <View style={styles.secondBox}>
          <Image
            style={styles.instructorImage}
            source={{ uri: "https://randomuser.me/api/portraits/women/81.jpg" }}
          />
          <View style={styles.fourthBox}>
            <Text style={styles.instructor}>Instructor </Text>
            <Text style={styles.name}>Irma Jackson</Text>
          </View>
        </View>
        <View style={styles.thirdBox}>
          <Text style={styles.totalTime}>Total Time</Text>
          <Text style={styles.time}>Time</Text>
        </View>
      </View>

      <View style={styles.secondPart}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.description}> Text goes Here .....</Text>
      </View>
      <View style={styles.exercise}>
        <Text style={styles.heading}>Exercises</Text>
      </View>

      <View>
        {VidArray.map((ele, i) => (
          <Video key={i} {...ele} />
        ))}
      </View>
    </ScrollView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060507",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    marginTop: 10,
    color: "#CCC",
    fontSize: 16,
  },
  emote: {
    marginRight: 20,
    fontSize: 20,
    color: "#CCC",
  },
  exercise: {
    marginTop: 30,
  },
  fourthBox: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  firstBox: {
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row",
  },
  heading: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#CCC",
  },
  instructor: {
    fontSize: 14,
    color: "#CCC",
  },
  time: {
    fontSize: 15,
    color: "#CCC",
  },
  totalTime: {
    fontSize: 14,
    color: "#CCC",
  },
  instructorImage: {
    height: 75,
    width: 75,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#2E2C3A",
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#CCC",
  },
  scrollView: {
    backgroundColor: "#1B1A22",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },
  secondBox: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  secondPart: {
    marginTop: 17,
  },
  thirdBox: {
    marginTop: 4,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
});
