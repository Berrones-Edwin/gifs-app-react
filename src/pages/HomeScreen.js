import React from "react";
import AddCategory from "../components/AddCategory";
import GridGif from "../components/GridGif";
import useFetchGifs from "../hooks/useFetchGifs";
import { useGetGifs } from "../hooks/useGetGifs";

const HomeScreen = () => {
    const [loading, keyword] = useFetchGifs();
    const gif = useGetGifs();
    return (
        <>
            <h2>{keyword}</h2>
            <AddCategory />
            <hr />

            <ul>
                {loading && <p>Loading data...</p>}
                <GridGif gifs={gif} />
            </ul>
        </>
    );
};

export default HomeScreen;
