import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { shopData, workoutData } from "../data";
import { Item, RootStackParamList, Workout } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { FAB } from "react-native-paper";

const { width } = Dimensions.get("window");

type LandingScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  "Home"
>;
type LandingScreenRouteProp = RouteProp<RootStackParamList, "Home">;
interface Props {
  navigation: LandingScreenNavigationProp;
  route: LandingScreenRouteProp;
}

const LandingScreen = ({ navigation }: Props) => {
  const renderWorkoutList = ({ item }: { item: Workout }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Workout")}
        style={styles.tab}
      >
        <MaterialCommunityIcons name={item.emoji} size={24} color="black" />
        <Text style={[styles.commomTextStyles]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderShopItems = ({ item }: { item: Item }) => {
    return (
      <View style={styles.itemView}>
        <Image
          source={{ uri: item.image.toString() }}
          style={styles.itemImage}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 17, marginBottom: 2 }}>
            {item.name}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Shop")}
            style={styles.orderBtn}
          >
            <Text>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderWorkoutActivity = ({ item }: { item: Item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#4D4253",
          marginVertical: 13,
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Image
          source={{ uri: item.image.toString() }}
          style={styles.workoutImage}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 17, marginBottom: 2 }}>
              WeightLifting
            </Text>
            <Text style={{ color: "white", fontSize: 17, marginBottom: 2 }}>
              5 Exercises
            </Text>
          </View>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => navigation.navigate("Workout")}
          >
            <AntDesign name="arrowright" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <View style={styles.headerContainer}>
          <View>
            <Text style={[styles.commomTextStyles]}>
              Stay Fit and Healthy ⛹️‍♂️
            </Text>
            <Text style={[styles.commomTextStyles, { fontSize: 20 }]}>
              Hi, Jane Doe!
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={30} color="grey" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flex: 0,
            height: 50,
          }}
        >
          <FlatList
            data={workoutData}
            keyExtractor={(item) => item.name.toString()}
            renderItem={renderWorkoutList}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ marginTop: 30, height: 330 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginVertical: 8,
            }}
          >
            <Text style={[styles.commomTextStyles]}>Shop Now</Text>
            <Text style={{ color: "#999" }}>Show All</Text>
          </View>
          <FlatList
            data={shopData}
            keyExtractor={(item) => item.name.toString()}
            renderItem={renderShopItems}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ width: width - 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginVertical: 8,
            }}
          >
            <Text style={[styles.commomTextStyles]}>Featured Exercise</Text>
            <Text style={{ color: "#999" }}>Show All</Text>
          </View>
          <FlatList
            data={shopData}
            keyExtractor={(item) => item.name.toString()}
            renderItem={renderWorkoutActivity}
            ListFooterComponent={() => {
              return <View style={{ width, height: 20 }} />;
            }}
          />
        </View>
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="run"
        color="white"
        onPress={() => navigation.navigate("Activity")}
      />
    </>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060507",
    paddingHorizontal: 8,
    paddingTop: 5,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commomTextStyles: {
    color: "#ccc",
  },
  headerContainer: {
    flex: 0,
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  tab: {
    width: 130,
    height: 50,
    backgroundColor: "#4D4253",
    marginHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 7,
  },
  itemImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemView: {
    flex: 0,
    backgroundColor: "#4D4253",
    marginHorizontal: 10,
    height: 270,
    width: 250,
    borderRadius: 18,
  },
  orderBtn: {
    backgroundColor: "#ff5233",
    padding: 5,
    borderRadius: 10,
  },
  workoutImage: {
    width: 70,
    height: 50,
    borderRadius: 7,
  },
  arrow: {
    backgroundColor: "#ff5233",
    padding: 3,
    borderRadius: 3,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 10,
    backgroundColor: "#f54748",
  },
});
