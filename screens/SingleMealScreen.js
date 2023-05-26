import React, { useLayoutEffect, useContext } from "react";
import SingleMeal from "../components/MealsList/SingleMeal";
import { View, StyleSheet, ScrollView } from "react-native";

import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const SingleMealScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const { mealId, color } = route.params;

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatus = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            handlePress={changeFavoriteStatus}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color='red'
            size={36}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatus]);

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
