import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  View,
} from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, "Register">;
interface Props {
  navigation: RegisterScreenNavigationProp;
  route: RegisterScreenRouteProp;
}

const RegisterScreen = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View style={styles.centeredView}>
      <Image
        style={styles.bgImage}
        source={{
          uri: "https://cdn.discordapp.com/attachments/815896599162912811/848307135216615504/back1.jpg",
        }}
      />
      <Modal transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your First Name"
              placeholderTextColor="#FF5233"
              onChangeText={(fname) => setfname(fname)}
              defaultValue={fname}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your Last Name"
              placeholderTextColor="#FF5233"
              onChangeText={(lname) => setlname(lname)}
              defaultValue={lname}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your Email"
              keyboardType="email-address"
              placeholderTextColor="#FF5233"
              onChangeText={(email) => setemail(email)}
              defaultValue={email}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your Password"
              placeholderTextColor="#FF5233"
              onChangeText={(password) => setpassword(password)}
              defaultValue={password}
              secureTextEntry={true}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Register</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //   backgroundColor:"#4D4253",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#3d3938",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 0,
  },
  button: {
    marginTop: 25,
    borderRadius: 5,
    padding: 10,
    elevation: 4,
  },
  buttonClose: {
    backgroundColor: "#f52416",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    color: "#f52416",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    // backgroundColor:"#f52416",
    // color:"#3d3938",
    width: 200,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#f52416",
    textAlign: "center",
    color: "#f52416",
  },
  bgImage: {
    height: 700,
    width: "100%",
  },
});
