import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//import PieChart from 'react-native-pie';
const AttendanceRatio = (props) => {
  return (
    <View style={styles.list}>
      <Text style={styles.header}>Attendance</Text>
      <View style={styles.second}>
        <Image
          style={styles.chart}
          source={require("../../assets/piechart.png")}
        />
        <View style={styles.legend}>
          <Text>
            <View style={styles.dotred}></View>Absent
          </Text>
          <Text>
            <View style={styles.dotpurple}></View>Present
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 40,
    width: "95vw",
    height: "30vh",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  chart: {
    height: 140,
    width: 140,
    margin: 10,
  },
  header: {
    width: "100%",
    fontSize: 20,
    marginLeft: 40,
  },
  second: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%'
  },
  legend: {
    marginTop: 50,
  },
  dotred: {
    borderRadius: 50,
    backgroundColor: "red",
    height: 10,
    width: 10,
    marginRight: 5,
  },
  dotpurple: {
    borderRadius: 50,
    backgroundColor: "purple",
    height: 10,
    width: 10,
    marginRight: 5,
  },
});

export default AttendanceRatio;
