import React from "react";
import { useParams } from "react-router";
import GridGif from "../components/GridGif";
import useFetchGifs from "../hooks/useFetchGifs";

const GifScreen = () => {
    const { keyword } = useParams();
    const [data, loading] = useFetchGifs(keyword);

    return (
        <>
            {loading && <p>Loading data...</p>}
            <GridGif gifs={data} />
        </>
    );
};

export default GifScreen;
