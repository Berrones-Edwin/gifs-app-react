import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GridGifItem from "./GridGifItem";

export default function GridGif({ category }) {
    const { data: images, loading } = useFetchGifs(category);
    return (
        <>
            <h2>{category}</h2>
            {loading && <p> Caragndo datos... </p>}
            <div className="card-grid">
                {images.map(({ id, title, image }) => (
                    <GridGifItem key={id} id={id} title={title} image={image} />
                ))}
            </div>
        </>
    );
}
