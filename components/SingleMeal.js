import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

const SingleMeal = ({ route }) => {
  const { mealId, color } = route.params;

  const meal = MEALS.find((meal) => meal.id === mealId);

  const {
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = meal;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.mealCard, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
          <Image source={imageUrl} style={styles.image} />
          <View style={[styles.subContainer, , { backgroundColor: color }]}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{complexity}</Text>
              <Text style={styles.headerText}>{affordability}</Text>
              <Text style={styles.headerText}>Only {duration}m</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.ingredients}>
                <Text style={styles.title}>ingredients</Text>
                {ingredients.map((ingredient) => (
                  <Text key={ingredient}>{ingredient}</Text>
                ))}
              </View>
              <View style={styles.steps}>
                <Text style={styles.title}>Directions</Text>
                {steps.map((step, index) => (
                  <Text key={index}>
                    {index + 1}: {step}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleMeal;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },

  mealCard: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    padding: 20,
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  subContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "capitalize",
  },

  image: {
    height: 250,
    width: 250,
    borderRadius: 20,
    marginTop: 20,
  },

  headerContainer: {
    flexDirection: "row",
  },

  headerText: {
    padding: 16,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "capitalize",
  },

  infoContainer: {
    width: 700,
  },

  ingredients: {
    flexDirection: "column",
    marginBottom: 20,
  },

  steps: {
    flexDirect: "column",
    marginBottom: 20,
  },
});