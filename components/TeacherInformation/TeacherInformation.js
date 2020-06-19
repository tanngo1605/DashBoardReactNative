import React from "react";
import Avatar from "../avatar/Avatar";
import { View, StyleSheet, Text } from "react-native";

const TeacherInformation = (props) => {
  return (
    <View style={styles.container}>
      <Avatar style={styles.avatar} />
      <View style={styles.infor}>
        <Text style={{fontSize: 20}}>Hello Teacher</Text>
        <Text style={{fontSize: 20}}>CBSE -- VII</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100vw",
        marginLeft: 5,
        marginBottom: 10
    },
    infor:{
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },

    avatar:{
        backgroundColor: 'white',
        color: 'white'
    }
})

export default TeacherInformation;
