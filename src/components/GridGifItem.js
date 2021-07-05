import React from "react";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";

function GridGifItem({ title, image, id }) {
    let path = `/gifs/details/${id}`;
    return (
        <>
            <Link to={path}>
                <div class="card">
                    <img
                        loading="lazy"
                        className="card-img-top"
                        src={image}
                        alt={title}
                    />
                </div>
            </Link>
            <div class="card-body d-flex justify-content-between">
                <p className="card-title"> {title}</p>
                <FavButton id={id} />
            </div>
        </>
    );
}

export default React.memo(
    GridGifItem,
    (prevProps, nextProps) => prevProps.id === nextProps.id
);
