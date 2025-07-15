"use client"

import { IProduct } from "@/entities"
import { createContext, FC, PropsWithChildren, useCallback, useState } from "react"

type SetFavoriteParams = {
    id: IProduct["id"];
    isFavorite: boolean;
};

interface FavoriteProviderType {
    favorites: Record<IProduct["id"], boolean>
    setContextFavorite: (params: SetFavoriteParams) => void
}

export const FavoriteContext = createContext<FavoriteProviderType>({
    favorites: {},
    setContextFavorite: () => { }
})

export const FavoriteContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [favorites, setFavorites] = useState<FavoriteProviderType["favorites"]>({})

  const setFavoritesHandler = useCallback(({ id, isFavorite }: SetFavoriteParams) => {
    setFavorites((prev) => {
      if (prev[id] === isFavorite) {
        return prev;
      }

      return {
        ...prev,
        [id]: isFavorite,
      };
    });
  }, []);


    return <FavoriteContext value={{ favorites, setContextFavorite: setFavoritesHandler }}>
        {children}
    </FavoriteContext>
}
