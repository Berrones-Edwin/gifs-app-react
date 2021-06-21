import React from "react";
import GridGifItem from "./GridGifItem";

export default function GridGif({ gifs }) {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {gifs.map(({ id, title, image }) => (
                    <div className="col">
                        <GridGifItem
                            key={id}
                            id={id}
                            title={title}
                            image={image}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
