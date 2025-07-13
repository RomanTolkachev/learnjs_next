"use client"

import { Heart } from "lucide-react";
import React, { FC, use } from "react";
import { handleSubmit } from "./handleSubmit";
import { FavoriteContext } from "@/providers/FavoriteProvider";
import { useIsFavorite } from "./lib";

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
        await handleSubmit(isFavorite, racketId);
    }

    return (
        <button type="button" onClick={handleClick}>
            <Heart
                className={`${isFavorite ? "text-red-500" : "text-inherit"} transition-colors`} />
        </button>
    )
}