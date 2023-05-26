import React, { useContext, useNavigation } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { Text } from "react-native";

const FavoritesScreen = () => {
  const favoritesCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesCtx.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;
