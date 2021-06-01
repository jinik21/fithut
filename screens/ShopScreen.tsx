import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import { shopData } from "../data";
import { Item } from "../types";
import { RootStackParamList } from "../types";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type VideoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Shop"
>;
type VideoScreenRouteProp = RouteProp<RootStackParamList, "Shop">;
interface Props {
  navigation: VideoScreenNavigationProp;
  route: VideoScreenRouteProp;
}

const { width } = Dimensions.get("window");

const ShopScreen = () => {
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
          style={styles.orderBtn}
          >
            <Text>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={shopData}
        keyExtractor={(item) => item.name.toString()}
        renderItem={renderShopItems}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    backgroundColor:'#060507',
    flex:1,
    alignItems:'center',

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
    marginVertical: 10,
    height: 270,
    width: 300,
    borderRadius: 18,
  },
  listContainer:{
    
  },
  orderBtn: {
    backgroundColor: "#ff5233",
    padding: 5,
    borderRadius: 10,
  },
});
