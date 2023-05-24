import React from "react";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";
import MealTile from "../components/MealTile";

const MealsOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const selectedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMealItem = (itemData) => {
    return <MealTile meal={itemData} {...itemData} categoryId={categoryId} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.mealContainer}>
        <FlatList
          data={selectedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </View>

    // <View style={styles.container}>
    //   <Text>Meals Overview Screen</Text>
    //   <Text>{categoryId}</Text>
    //   {selectedMeals.map((meal) => {
    //     return (
    //       <MealTile
    //         key={meal.id}
    //         meal={meal}
    //         {...meal}
    //         categoryId={categoryId}
    //       />
    //     );
    //   })}
    // </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mealContainer: {
    padding: 16,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },

  mealTile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  mealTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
