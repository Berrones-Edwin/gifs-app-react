import React from "react";
import { useHistory } from "react-router";


export default function GridGifItem({ title, image, id }) {
    const { push } = useHistory();


    const handleGifDetail = () => {
        push({
            pathname: `gifs/details/${id}`,
        });
    };
    return (
        <div className="card" onClick={handleGifDetail}>
            <img loading="lazy" src={image} alt={title} />
            <p> {title}</p>
        </div>
    );
}
