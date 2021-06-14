import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm() {
    const [inputValue, setInputValue] = useState("");
    const [rating, setRating] = useState(RATINGS[0]);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 3) {
            setInputValue("");
            const path = `/gifs/${inputValue}/${rating}`;
            history.replace(path);
        }
    };
    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleChangeRating = (e) => {
        setRating(e.target.value);
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
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Select Rating</option>
                {RATINGS.map((r) => (
                    <option key={r}>{r}</option>
                ))}
            </select>
            <input type="submit" value="search" />
        </form>
    );
}

export default React.memo(SearchForm);
