import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import SingleMeal from "./MealsList/SingleMeal";

const MealTile = ({ meal, categoryId }) => {
  const { id, title, imageUrl, affordability, complexity, duration } =
    meal.item;

  const [event, updateEvent] = useState();

  const navigation = useNavigation();

  const renderMeal = () => {
    navigation.navigate("Meal", {
      mealId: id,
    });

    // const mealInfo = {
    //   id: itemData.id,
    //   title: itemData.title,
    //   imageUrl: itemData.imageUrl,
    //   duration: itemData.duration,
    //   ingredients: itemData.ingredients,
    //   steps: itemData.steps,
    // };

    // return <SingleMeal mealInfo={mealInfo} {...mealInfo} />;
  };

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
        styles.container,
        { backgroundColor: "#1298aa" },
        state.hovered && styles.onHover,
      ]}
      onHoverIn={() => handleEvent("hovered")}
      onHoverOut={() => handleEvent("notHovered")}
      onPress={() => renderMeal()}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.info}>
          <View style={styles.imgContainer}>
            <Image source={imageUrl} style={styles.image} />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>Time: {duration}m</Text>
            <Text style={styles.infoText}>Affordable: {affordability}</Text>
            <Text style={styles.infoText}>Complexity: {complexity}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MealTile;

const styles = StyleSheet.create({
  container: {
    width: 600,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    margin: 10,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    shadowColor: "#888",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 0.3,
  },

  title: {
    fontWeight: "bold",
    fontSize: 32,
  },

  imgContainer: {
    margin: 10,
    shadowColor: "#ccc",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 0.3,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
  },

  image: {
    height: 150,
    width: 150,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    flexDirection: "row",
  },

  infoTextContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },

  infoText: {
    fontWeight: "bold",
    fontSize: 24,
  },

  onHover: {
    opacity: 0.3,
    borderColor: "black",
    borderWidth: 3,
  },
});
