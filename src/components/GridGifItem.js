import React from "react";
import { Link, useHistory } from "react-router-dom";

function GridGifItem({ title, image, id }) {
    const { push } = useHistory();
    let path = `/gifs/details/${id}`
    return (
        // <Link to={`/gifs/details/${id}`}>
        <div
            onClick={() =>
                push({
                    pathname: path,
                })
            }
            className="card"
        >
            <img
                loading="lazy"
                className="card-img-top"
                src={image}
                alt={title}
            />
            <p className="card-title"> {title}</p>
        </div>
        // </Link>
    );
}

export default React.memo(
    GridGifItem,
    (prevProps, nextProps) => prevProps.id === nextProps.id
);
