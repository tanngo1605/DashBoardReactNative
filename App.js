import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Navigator,
} from "react-native";
import AttendanceList from "./components/attendanceList/attendanceList";
import AttendanceRatio from "./components/attendanceRatio/AttendanceRatio";
import TeacherInformation from "./components/TeacherInformation/TeacherInformation";
import Header from "./components/header/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TeacherInformation />
      <AttendanceRatio />
      <AttendanceList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
    flexDirection: 'column'
  },
});
