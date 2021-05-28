import React from "react";
import { useParams } from "react-router";
import GridGif from "components/GridGif";
import useFetchGifs from "hooks/useFetchGifs";
import { useGetGifs } from "hooks/useGetGifs";

const GifScreen = () => {
    const { keyword } = useParams();
    const [loading,keywordToUse] = useFetchGifs(keyword);
    const gifs = useGetGifs();


    return (
        <>
        <h3>{ keywordToUse }</h3>
            {loading && <p>Loading data...</p>}
            <GridGif gifs={gifs} />
        </>
    );
};

export default GifScreen;
