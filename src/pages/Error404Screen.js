import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Error404Screen = () => {
    return (
        
        <>
            <Helmet>
                <title> Page 404 </title>
            </Helmet>
            <h3>Error 404</h3>
            <p>Page not found</p>
            <Link to="/"> Back go to home</Link>
        </>
    );
};

export default Error404Screen;
