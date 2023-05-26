import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMeals((favoriteMeals) => [...favoriteMeals, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMeals((currentFavorites) =>
      currentFavorites.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMeals,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
