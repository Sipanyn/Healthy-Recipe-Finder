import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "../types/recipe";
import { getRecipe } from "../api/getRecipe";

export const useRecipe = (recipeId: string | undefined) => {
  return useQuery<Recipe[]>({
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe({ recipeId }),
  });
};
