import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { useState } from "react";

const CategoryGridTile = ({ title, color, onPress }) => {
  const [event, updateEvent] = useState([]);

  const handleEvent = (eventName) => {
    if (eventName === "hovered") {
      updateEvent("hovered");
    } else {
      updateEvent("notHovered");
    }
  };

  return (
    <Pressable
      style={(state) => [
        styles.gridItem,
        { backgroundColor: color },
        state.hovered && styles.onHover,
      ]}
      onPress={onPress}
      onHoverIn={() => handleEvent("hovered")}
      onHoverOut={() => handleEvent("notHovered")}
    >
      <View style={styles.itemContent}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#888",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  onHover: {
    opacity: 0.3,
    borderColor: "black",
    borderWidth: 3,
  },

  button: {
    flex: 1,
  },

  itemContent: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
