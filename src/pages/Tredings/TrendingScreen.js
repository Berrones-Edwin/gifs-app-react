import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { numberRandom } from 'helpers/helpers'

import { getTrendingGifs } from 'services/getTrendings'
import SearchForm from 'components/SearchForm'

const COLORCLASS = ['primary', 'warning', 'success', 'danger']

const TrendingScreen = () => {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        getTrendingGifs().then((trendings) => {
            setTrending(trendings)
        })
    }, [])

    if (trending.length === 0) return <p>Not trending</p>

    return (
        <div>
            <section className="mb-3">
                <h5 className="text-center">Search Gifs</h5>
                <SearchForm />
            </section>

            <h5 className="text-center">Trending Gifs</h5>
            <hr />
            <ul className="list-inline">
                {trending.map((t, idx) => (
                    <li key={idx} className="list-inline-item mb-3">
                        <Link
                            className={`btn btn-sm btn-outline-${
                                COLORCLASS[numberRandom()]
                            }`}
                            to={`/gifs/${t}`}
                        >
                            {t}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TrendingScreen
