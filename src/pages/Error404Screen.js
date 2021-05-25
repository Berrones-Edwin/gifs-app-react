import React from "react";
import { Link } from "react-router-dom";

const Error404Screen = () => {
    return (
        <div>
            <h3>Error 404</h3>
            <p>Page not found</p>
            <Link to="/"> Back go to home</Link>
        </div>
    );
};

export default Error404Screen;
