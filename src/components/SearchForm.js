import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ ínitialKeyword = "", initialRating = "" }) {
    const { inputValue, rating, updateKeyword, updateRating } = useForm({
        ínitialKeyword,
        initialRating,
    });

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 3) {
            const path = `/gifs/${inputValue}/${rating}`;
            history.replace(path);
        }
    };
    const handleChangeInputValue = (e) => {
        updateKeyword(e.target.value);
    };

    const handleChangeRating = (e) => {
        updateRating(e.target.value);
    };

    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="row">
                <div className="col">
                    <input
                        type="text"
                        name="category"
                        value={inputValue}
                        autoComplete="off"
                        onChange={handleChangeInputValue}
                        className="form-control "
                        placeholder="Search gifs"
                    />
                </div>
                <div className="col">
                    <select
                        value={rating}
                        onChange={handleChangeRating}
                        className="form-control"
                    >
                        <option disabled>Select Rating</option>
                        {RATINGS.map((r) => (
                            <option key={r}>{r}</option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="search"
                    />
                </div>
            </form>
        </div>
    );
}

export default React.memo(SearchForm);
