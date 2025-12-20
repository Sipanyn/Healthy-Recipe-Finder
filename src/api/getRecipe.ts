import type { Recipe } from "../types/recipe";

export const getRecipe = async ({
  recipeId,
}: {
  recipeId?: string | undefined;
}): Promise<Recipe[]> => {
  console.log(recipeId);

  const data = await fetch(
    `https://healthy-recipe-json-server.vercel.app/recipes`
  );
  if (!data.ok) {
    throw new Error();
  }
  const result = await data.json();
  const recipe: Recipe[] = result?.find(
    (item: Recipe) => String(item.id) === recipeId
  );
  console.log(recipe);
  return recipe;
  //return object
};
