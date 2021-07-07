import useGetGifsFavorites from "hooks/useGetGifsFavorites";
import React from "react";
import Helmet from "react-helmet";
import GridGif from "components/GridGif";
import Loader from "components/Loader/Loader";

const FavoritesScreen = () => {
    const { gifFavorites, loading, error } = useGetGifsFavorites();

    if (loading) return <Loader />;
    if (error) return null;
    return (
        <>
            <Helmet>
                <title> My Gifs Favorites</title>
            </Helmet>
            <div>
                <h3>My Gifs Favorites</h3>
                <br />

                <GridGif gifs={gifFavorites} />
            </div>
        </>
    );
};

export default FavoritesScreen;
