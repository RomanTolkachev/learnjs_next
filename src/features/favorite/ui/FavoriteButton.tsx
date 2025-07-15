"use client"

import { Heart } from "lucide-react";
import React, { FC, use } from "react";
import { toggleFavorite, useIsFavorite } from "../lib";
import { FavoriteContext } from "../providers";

interface Props {
    isFavoriteInitial: boolean
    racketId: number
}

export const FavoriteButton: FC<Props> = ({ racketId, isFavoriteInitial }) => {

    const { setContextFavorite } = use(FavoriteContext);
    const isFavorite = useIsFavorite({id:racketId, isFavoriteInitial})

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.nativeEvent.stopImmediatePropagation() // компонент кнопки находится внутри Link и обычного stopPropogation недостаточно
        e.stopPropagation();
        e.preventDefault()
        setContextFavorite({id: racketId, isFavorite: !isFavorite})
        await toggleFavorite(isFavorite, racketId);
    }

    return (
        <button type="button" onClick={handleClick}>
            <Heart
                className={`${isFavorite ? "text-red-500" : "text-inherit"} transition-colors`} />
        </button>
    )
}