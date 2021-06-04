import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import Header from "../../components/Header";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import ActivityScreen from "../../screens/ActivityScreen";
import LandingScreen from "../../screens/LandingScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import ShopScreen from "../../screens/ShopScreen";
import VideoScreen from "../../screens/WorkoutActivity";
import { RootStackParamList } from "../../types";
import DrawerContent from "../../components/DrawerContent";

const AppDrawer = createDrawerNavigator();
const ActivityStack = createStackNavigator();
const HomeStack = createStackNavigator();
const WorkoutStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ShopStack = createStackNavigator();

const ActivityStackScreen = () => {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen
        name="Activity"
        options={{
          header: ({ navigation }) => (
            <Header
              title={null}
              navigation={navigation as StackNavigationProp<RootStackParamList>}
              isActivity={true}
            />
          ),
          headerTransparent: true,
        }}
        component={ActivityScreen}
      />
    </ActivityStack.Navigator>
  );
};
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{
          header: () => null,
          headerTransparent: true,
        }}
        component={LandingScreen}
      />
    </HomeStack.Navigator>
  );
};
const WorkoutStackScreen = () => {
  return (
    <WorkoutStack.Navigator>
      <WorkoutStack.Screen
        name="Workout"
        options={{
          header: ({ navigation }) => (
            <Header
              title={"Workout"}
              navigation={
                navigation as DrawerNavigationProp<RootStackParamList>
              }
            />
          ),
          headerTransparent: true,
        }}
        component={VideoScreen}
      />
    </WorkoutStack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        options={{
          header: ({ navigation }) => (
            <Header
              title={"Profile"}
              navigation={navigation as StackNavigationProp<RootStackParamList>}
            />
          ),
          headerTransparent: true,
        }}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
const ShopStackScreen = () => {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="Shop"
        options={{
          header: ({ navigation }) => (
            <Header
              title={"Shop"}
              navigation={navigation as StackNavigationProp<RootStackParamList>}
            />
          ),
          headerTransparent: true,
        }}
        component={ShopScreen}
      />
    </ShopStack.Navigator>
  );
};

const index = () => {
  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerType="front"
      drawerContent={(props) => <DrawerContent props={props} />}
    >
      <AppDrawer.Screen name="Home" component={HomeStackScreen} />
      <AppDrawer.Screen name="Activity" component={ActivityStackScreen} />
      <AppDrawer.Screen name="Shop" component={ShopStackScreen} />
      <AppDrawer.Screen name="Profile" component={ProfileStackScreen} />
      <AppDrawer.Screen name="Workout" component={WorkoutStackScreen} />
    </AppDrawer.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({});
