import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import SingleMealScreen from "./screens/SingleMealScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#555" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              headerTitle: "Meals Categories",
              headerStyle: { backgroundColor: "#555" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverview}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name='Meal' component={SingleMealScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
