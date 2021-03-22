import React, { useState } from "react";

export default function AddCategory({ setCategories }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 3) {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue("");
        }
    };
    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="category"
                value={inputValue}
                autoComplete="off"
                onChange={handleChangeInputValue}
            />
        </form>
    );
}
