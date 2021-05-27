import React, { useState } from "react";
import { useHistory } from "react-router";

export default function AddCategory() {
    const [inputValue, setInputValue] = useState("");
    const { replace } = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 3) {
            setInputValue("");
            replace({
                pathname:`gifs/${inputValue}`,

            })
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
