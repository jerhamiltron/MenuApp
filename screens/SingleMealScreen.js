import React, { useLayoutEffect } from "react";
import SingleMeal from "../components/SingleMeal";
import { View, StyleSheet, ScrollView } from "react-native";

import IconButton from "../components/IconButton";

const SingleMealScreen = ({ route, navigation }) => {
  const { mealId, color } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            title='Tap Me!'
            handlePress={handlePress}
            icon='ios-information-circle-outline'
            color='red'
            size={36}
          />
        );
      },
    });
  }, [navigation, handlePress]);

  const handlePress = () => {
    navigation.navigate("MealsCategories");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mealCard}>
        <SingleMeal mealId={mealId} color={color} />
      </View>
    </ScrollView>
  );
};

export default SingleMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },

  mealCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
