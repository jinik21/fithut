import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  time: string;
  name: string;
}

const Video = ({ name, time }: Props) => {
  const [pressed, setPressed] = useState(false);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <>
      <TouchableOpacity
        onPress={() => setPressed(!pressed)}
        style={[
          styles.thirdPart,
          {
            backgroundColor: pressed ? "#ff5233" : "#2E2C3A",
            marginBottom: 20,
            paddingHorizontal: 10,
          },
        ]}
      >
        <View style={styles.video}>
          <Text style={styles.totalTime}>1 hr 45 min</Text>
          <Text style={styles.name}>{name}</Text>
          {pressed ? (
            <AntDesign name="caretdown" size={22} color="#ccc" />
          ) : (
            <AntDesign name="caretright" size={22} color="#ccc" />
          )}
        </View>
      </TouchableOpacity>
      {pressed && (
        <YoutubePlayer
          height={200}
          play={playing}
          webViewProps={{
            containerStyle: {
              borderRadius: 20,
              borderWidth: 4,
              borderColor: "#2E2C3A",
            },
          }}
          videoId={"iee2TATGMyI"}
          onChangeState={onStateChange}
        />
      )}
    </>
  );
};

export default Video;

const styles = StyleSheet.create({
  thirdPart: {
    // backgroundColor:"orange",
    marginTop: 10,
    borderRadius: 20,
    height: 80,
    width: "100%",
    justifyContent: "center",
  },
  time: {
    fontSize: 15,
    color: "#CCC",
  },
  totalTime: {
    fontSize: 14,
    color: "#CCC",
  },
  video: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#CCC",
  },
  emote: {
    marginRight: 20,
    fontSize: 20,
    color: "#CCC",
  },
});
