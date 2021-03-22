import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GridGif from "./components/GridGif";

export default function GifExpertApp() {
    const [categories, setCategories] = useState(["one punch"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ul>
                {categories.map((category) => (
                    <GridGif key={category} category={category} />
                ))}
            </ul>
        </>
    );
}
