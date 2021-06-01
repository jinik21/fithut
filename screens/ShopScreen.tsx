import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { shopData } from "../data";
import { Item } from "../types";

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
          <TouchableOpacity style={styles.orderBtn}>
            <Text>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={shopData}
        keyExtractor={(item) => item.name.toString()}
        renderItem={renderShopItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
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
});
