import React, { useContext, useState } from "react";
import { userContext } from "context/UserContext";
import { saveFavoriteGif } from "services/favorites";
import { FavoritesContext } from "context/FavoritesProvider";

const useFavorites = () => {
    const { user } = useContext(userContext);
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const [response, setResponse] = useState(null);

    const addFavoriteGif = ({ id }) => {
        saveFavoriteGif({
            nameCollection: user.id,
            nameDoc: id,
        })
            .then((resp) => {
                setResponse(resp);
                setFavorites((prev) => [...prev, { id }]);
            })
            .catch((err) => {
                setResponse(err);
            });
    };

    const checkExistGifFavorite = ({ id }) => {
        return favorites.some((f) => f.id === id);
    };

    return {
        addFavoriteGif,
        response,
        favorites,
        isFavorite: checkExistGifFavorite,
    };
};

export default useFavorites;
