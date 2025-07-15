
import { use } from "react";
import { FavoriteContext } from "../../providers";

export const useSetIsFavorite = () => {
  const { setContextFavorite } = use(FavoriteContext);

  return setContextFavorite;
};