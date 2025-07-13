import { FavoriteContext } from "@/providers/FavoriteProvider";
import { use } from "react";

export const useSetIsFavorite = () => {
  const { setContextFavorite } = use(FavoriteContext);

  return setContextFavorite;
};