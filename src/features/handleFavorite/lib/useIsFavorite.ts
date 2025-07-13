"use client"

import { IProduct } from "@/entities";
import { FavoriteContext } from "@/providers/FavoriteProvider";
import { use } from "react";

export const useIsFavorite = ({
  id,
  isFavoriteInitial,
}: {
  id: IProduct["id"];
  isFavoriteInitial?: boolean;
}): boolean => {
  const { favorites } = use(FavoriteContext);
  const isFavoriteGlobal = favorites[id] ?? false;

  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return Boolean(isFavorite);
};