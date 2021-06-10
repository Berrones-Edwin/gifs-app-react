import React from "react";
import { Link } from "react-router-dom";

function GridGifItem({ title, image, id }) {
    return (
        <Link to={`/gifs/details/${id}`}>
            <div className="card">
                <img loading="lazy" src={image} alt={title} />
                <p> {title}</p>
            </div>
        </Link>
    );
}

export default React.memo(
    GridGifItem,
    (prevProps, nextProps) => prevProps.id === nextProps.id
);
