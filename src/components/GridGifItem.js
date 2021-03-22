import React from "react";

export default function GridGifItem({ title, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <p> {title}</p>
        </div>
    );
}
