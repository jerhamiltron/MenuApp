import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ handlePress }) => {
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Ionicons name='star' size={24} color='white' />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginRight: 20,
  },
});
