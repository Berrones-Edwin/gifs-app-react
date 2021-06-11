import React, { useCallback } from "react";
import Helmet from "react-helmet"
import SearchForm from "components/SearchForm";
import GridGif from "components/GridGif";
import useFetchGifs from "hooks/useFetchGifs";
import { useGetGifs } from "hooks/useGetGifs";
import TrendingScreen from "./Tredings/index";
import { useHistory } from "react-router";

const HomeScreen = () => {
    const { loading, keyword } = useFetchGifs();
    const gif = useGetGifs();
    const { replace } = useHistory();

    const handleSubmit = useCallback(
        ({ inputValue }) => {
            replace({
                pathname: `gifs/${inputValue}`,
            });
        },
        [replace]
    );

    return (
        <>
            <Helmet>
                <title> {keyword || "Home Page"} </title>
            </Helmet>
            <div style={{ minHeight: "100vh" }}>
                <SearchForm onsubmit={handleSubmit} />

                <hr />
                <h2>Tu Última busqueda {keyword}</h2>
                <ul>
                    {loading && <p>Loading data...</p>}
                    <GridGif gifs={gif} />
                </ul>
                <TrendingScreen />
            </div>
        </>
    );
};

export default HomeScreen;
