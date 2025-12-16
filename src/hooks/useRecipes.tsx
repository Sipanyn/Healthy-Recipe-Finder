import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/getRecipes";
import type { Recipe } from "../types/recipe";

export const useRecipes = () => {
  return useQuery<Recipe[]>({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });
};
