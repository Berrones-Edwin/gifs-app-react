import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
// import { FaSearch } from 'react-icons/fa'
const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ ínitialKeyword = '', initialRating = '' }) {
    const { inputValue, rating, updateKeyword, updateRating } = useForm({
        ínitialKeyword,
        initialRating,
    })

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length >= 3) {
            const path = `/gifs/${inputValue}/${rating}`
            history.replace(path)
        }
    }
    const handleChangeInputValue = (e) => {
        updateKeyword(e.target.value)
    }

    const handleChangeRating = (e) => {
        updateRating(e.target.value)
    }

    return (
        <div className="row">
            <div className="col-sm-8 col-md-6 col-lg-5 mx-auto">
                <form className="input-group mt-4" onSubmit={handleSubmit}>
                    <input
                        className="form-control form-control-lg border-success mr-2"
                        type="search"
                        placeholder="Search Gif"
                        aria-label="Search"
                        name="category"
                        value={inputValue}
                        autoComplete="off"
                        onChange={handleChangeInputValue}
                    />
                    <br />
                    <select
                        value={rating}
                        onChange={handleChangeRating}
                        className="form-control form-control-lg ml-2"
                    >
                        <option disabled>Select Rating</option>
                        {RATINGS.map((r) => (
                            <option key={r}>{r}</option>
                        ))}
                    </select>
                    <button
                        className="btn btn-success btn-lg m-0"
                        type="submit"
                    >
                        <span className="d-none d-md-block">Search</span>
                        <i className="d-block d-md-none fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    )
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
    )
}

export default React.memo(SearchForm)
