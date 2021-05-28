import React from "react";
import { useParams } from "react-router";
import { useGetGifs } from "hooks/useGetGifs";

const GifDetailScreen = () => {
    const { id } = useParams();
    const gif = useGetGifs();

    const { title, image } = gif.filter((g) => g.id === id)[0];
    return (
        <>
            <h3>
                {title} - {id}
            </h3>
            <img src={image} alt={title} />
        </>
    );
};

export default GifDetailScreen;
