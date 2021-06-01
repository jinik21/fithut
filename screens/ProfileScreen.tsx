import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import ActivityGraph from "../components/ActivityGraph";
import Blobs from "../components/Blobs";
import { activityStats, bodyMeasurements } from "../data";
import { RootStackParamList } from "../types";

const { width } = Dimensions.get("window");

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;
interface Props {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const ProfileScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/women/94.jpg" }}
        style={styles.userImage}
      />
      <Text style={styles.username}>Jane Doe</Text>
      <Text style={styles.bio}>A short bio🔥</Text>
      <View style={styles.bodyMeasurementContainer}>
        {bodyMeasurements.map((ele, i) => {
          const { name, type, val } = ele;
          return (
            <>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
                key={i}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      color: "#ccc",
                    }}
                  >
                    {val}
                  </Text>
                  <Text
                    style={{
                      color: "#999999",
                      marginLeft: 3,
                    }}
                  >
                    {type}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#999999",
                  }}
                >
                  {name}
                </Text>
              </View>
              {i !== 2 && <View style={styles.divider} />}
            </>
          );
        })}
      </View>
      <View style={styles.activityStatsContainer}>
        {activityStats.map((ele, i) => {
          return <Blobs key={i} type={ele.type} val={ele.val} />;
        })}
      </View>
      <ActivityGraph />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060507",
    alignItems: "center",
    padding: 8,
    paddingTop: 60,
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  bodyMeasurementContainer: {
    flex: 0,
    width,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 25,
  },
  activityStatsContainer: {
    flex: 0,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    width,
  },
  username: {
    color: "#ccc",
    fontSize: 24,
    marginTop: 20,
  },
  bio: {
    color: "#ccc",
    fontSize: 12,
    marginVertical: 5,
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#999999",
  },
});
