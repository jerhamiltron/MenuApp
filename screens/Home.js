import React from "react";
import { View, Text, StyleSheet } from "react-native";

const home = () => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
