import React from "react";
import { View, StyleSheet } from "react-native";
import Avatar from "../avatar/Avatar";
//each student will have a name?
const studentsList = [
  "Sarah",
  "Tom",
  "Tony",
  "Tan",
  "Mark",
  "Buzz",
  "Jacob",
  "Jane",
  "Tracy"
];
const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        width: '95vw',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 'auto',
        marginLeft: 5,
        marginRight: 5,
        alignContent: 'space-between',
        justifyContent: 'center',
       
        marginBottom: 20
  },
   
  });

const AttendanceList = (props) => (
  <View style={styles.list}>
    {studentsList.map((e) => (
      <Avatar name={e} />
    ))}
  </View>
);



export default AttendanceList;
