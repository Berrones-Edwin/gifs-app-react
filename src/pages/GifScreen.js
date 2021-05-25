import React, { useState } from "react";
import AddCategory from "../components/AddCategory";
import GridGif from "../components/GridGif";

const GifScreen = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ul>
                <GridGif key={categories} category={categories} />
            </ul>
        </>
    );
};

export default GifScreen;
