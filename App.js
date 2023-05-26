import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import SingleMealScreen from "./screens/SingleMealScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

// import FavoritesContextProvider from "./store/context/favorites-context";  // context api method
import { Provider } from "react-redux"; // redux method
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = (params) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#777" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#555" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#1298aa",
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#555" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                // headerTitle: "Meals Categories",
                // headerStyle: { backgroundColor: "#555" },
                // headerTintColor: "white",
                headerShown: false,
              }}
            />
            <Stack.Screen name='MealsOverview' component={MealsOverview} />
            <Stack.Screen name='Meal' component={SingleMealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
