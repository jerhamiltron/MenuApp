import { View, ScrollView, FlatList, StyleSheet } from "react-native";

import MealTile from "../MealTile";

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    return <MealTile meal={itemData} {...itemData} />;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mealContainer}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </ScrollView>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },

  mealContainer: {
    padding: 16,
    backgroundColor: "#ccc",
    flex: 1,
    height: "100vh",
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
