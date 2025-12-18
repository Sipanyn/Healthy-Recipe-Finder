import { queryClient } from "../lib/queryClient";

export const refetchRecipes = () => {
  return queryClient.refetchQueries({ queryKey: ["recipes"] });
};
