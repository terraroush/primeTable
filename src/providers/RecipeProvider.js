import React, { useState, createContext } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const [recipeData, setRecipeData] = useState([]);

  const getRecipe = () => {
    return fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=4`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData((recipeData) => [data, ...recipeData]);
      });
  };

  return (
    <RecipeContext.Provider
      value={{
        getRecipe,
        recipeData,
        setRecipeData,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
