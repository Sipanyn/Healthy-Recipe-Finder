import type { Recipe } from "../types/recipe";

export const getRecipes = async (): Promise<Recipe[]> => {
  const data = await fetch(
    `https://healthy-recipe-json-server.vercel.app/recipes`
  );
  const result = await data.json();
  return result;
};
