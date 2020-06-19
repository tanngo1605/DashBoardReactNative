import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Avatar = ({ name }) => (
  <View style={styles.avatar}>
    <Image style={styles.img} source={require("../../assets/picture.jpg")} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 1,
    margin: 10,
    width: 80,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default Avatar;
