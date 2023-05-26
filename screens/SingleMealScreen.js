import React, { useLayoutEffect, useContext } from "react";
import SingleMeal from "../components/MealsList/SingleMeal";
import { View, StyleSheet, ScrollView } from "react-native";

import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const SingleMealScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId, color } = route.params;

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatus = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
      // favoriteMealsCtx.removeFavorite(mealId); // context api methods
    } else {
      dispatch(addFavorite({ id: mealId }));
      // favoriteMealsCtx.addFavorite(mealId); // context api methods
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
