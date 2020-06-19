import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.iconhamburger}
        source={require("../../assets/Hamburger_icon.svg.png")}
      />
      <Text style={styles.text}>SJBSVM</Text>
      <Image
        style={styles.iconBell}
        source={require("../../assets/bell-icon.svg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 0,
    padding: 10,
    width: '100vw',
    alignItems: 'center',
    marginBottom: 10
  },
  iconhamburger: {
    height: 30,
    width: 30,
    marginLeft: 10,
   
  },
  iconBell: {
    height: 30,
    width: 30,
    marginLeft: 'auto',
   
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  
  },
});

export default Header;
