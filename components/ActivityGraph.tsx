import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const { width } = Dimensions.get("window");

const chartConfig = {
  backgroundColor: "#4D4253",
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(245, 36, 22, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(204, 204, 204, ${opacity})`,
  style: {
    width: width * 0.9,
    height: 200,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#000",
  },
};

const ActivityGraph = () => {
  return (
    <LineChart
      data={{
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            data: [1, 2, 3, 2, 1, 2, 1],
          },
        ],
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisSuffix="km"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={chartConfig}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
        width: width * 0.9,
        height: 200,
      }}
    />
  );
};

export default ActivityGraph;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 200,
    padding: 7,
    backgroundColor: "#4D4253",
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  textStyles: {
    color: "#ccc",
    fontSize: 15,
  },
});
