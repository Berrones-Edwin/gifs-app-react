import React from "react";
import { useHistory } from "react-router";


export default function GridGifItem({ title, image, id }) {
    const { replace } = useHistory();


    const handleGifDetail = () => {
        replace({
            pathname: `/gifs/details/${id}`,
        });
    };
    return (
        <div className="card" onClick={handleGifDetail}>
            <img loading="lazy" src={image} alt={title} />
            <p> {title}</p>
        </div>
    );
}
