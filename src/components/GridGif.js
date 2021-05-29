import React from "react";
import GridGifItem from "./GridGifItem";

export default function GridGif({ gifs }) {
    return (
        <>
            <div className="card-grid">
                {gifs.map(({ id, title, image }) => (
                    <GridGifItem key={id} id={id} title={title} image={image} />
                ))}
               
            </div>
        </>
    );
}
