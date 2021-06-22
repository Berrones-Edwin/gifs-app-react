import React from "react";
import { Link } from "react-router-dom";

function GridGifItem({ title, image, id }) {

    let path = `/gifs/details/${id}`;
    return (
        <Link to={path}>
            <img
                loading="lazy"
                className="card-img-top"
                src={image}
                alt={title}
            />
            <p className="card-title"> {title}</p>
        </Link>
    );
}

export default React.memo(
    GridGifItem,
    (prevProps, nextProps) => prevProps.id === nextProps.id
);
