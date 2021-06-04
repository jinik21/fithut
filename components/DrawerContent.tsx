import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title, Caption, Drawer, Avatar } from "react-native-paper";
import {
  MaterialCommunityIcons as Icon,
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const DrawerContent = ({ props }: Props) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#2E2C3A" }}>
      <DrawerContentScrollView
        style={{
          backgroundColor: "#2E2C3A",
        }}
        {...props}
      >
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/94.jpg",
                }}
                size={60}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Jane Doe</Title>
                <Caption style={styles.caption}>Noice</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color="#FB5B21" size={size} />
              )}
              label="Home"
              onPress={() => props.navigation.navigate("Home")}
              labelStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="user" size={size} color="#FB5B21" />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate("Profile")}
              labelStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="fitness" size={size} color="#FB5B21" />
              )}
              label="Activity"
              onPress={() => props.navigation.navigate("Activity")}
              labelStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="shop" size={size} color="#FB5B21" />
              )}
              label="Shop"
              onPress={() => props.navigation.navigate("Shop")}
              labelStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="dumbbell" size={size} color="#FB5B21" />
              )}
              label="Workout"
              onPress={() => props.navigation.navigate("Workout")}
              labelStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color="#FB5B21" size={size} />
          )}
          label="Sign Out"
          labelStyle={{
            color: "white",
          }}
          onPress={logout}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#2E2C3A",
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: "#999",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    backgroundColor: "#2E2C3A",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    backgroundColor: "#2E2C3A",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
