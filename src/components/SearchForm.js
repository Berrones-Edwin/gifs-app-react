import React, { useState } from "react";

function SearchForm({ onsubmit }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 3) {
            setInputValue("");
            onsubmit({ inputValue });
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

export default React.memo(SearchForm);
