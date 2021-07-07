import { FavoritesContext } from "context/FavoritesProvider";
import { useContext, useEffect, useState } from "react";
import { getGifsFavorites } from "../services/getGifsFavorites";

const useGetGifsFavorites = () => {
    const { favorites } = useContext(FavoritesContext);

    const [gifFavorites, setGifFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const ids = favorites.map((f) => f.id).join();

    useEffect(() => {
        setLoading(false);
        getGifsFavorites({ idsGifs: ids })
            .then((resp) => {
                setLoading(true);
                setGifFavorites(resp);
            })
            .then((err) => {
                setLoading(false);
                setError(err);
            })
            .finally(() => setLoading(false));
    }, [ids]);

    return {
        gifFavorites,
        loading,
        error,
    };
};

export default useGetGifsFavorites;
