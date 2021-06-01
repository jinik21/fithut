import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { RootStackParamList } from "../../types";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;
interface Props {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

const LoginScreen = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://cdn.discordapp.com/attachments/815896599162912811/848307135216615504/back1.jpg",
      }}
    >
      <Modal transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              autoCompleteType="email"
              onChangeText={(emailId) => setEmailId(emailId)}
              defaultValue={emailId}
              placeholder="Enter your Email"
              placeholderTextColor="#ff5233"
              keyboardType="email-address"
            />
            <TextInput
              //style={styles.textInput}
              style={styles.textInput}
              autoCompleteType="password"
              onChangeText={(password) => setPassword(password)}
              defaultValue={password}
              placeholder="Enter your Password"
              placeholderTextColor="#ff5233"
              keyboardType="default"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={login}
            >
              <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  color: "#999",
                  marginTop: 20,
                }}
              >
                New user? Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    borderRadius: 5,
    padding: 10,
    elevation: 4,
  },
  buttonClose: {
    backgroundColor: "#F52416",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#3d3938",
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    height: 40,
    width: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: "#f52416",
    color: "#f52416",
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
