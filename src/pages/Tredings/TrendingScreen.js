import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getTrendingGifs } from 'services/getTrendings'

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
            <h3 className="text-center">Trending Gifs</h3>
            <ul>
                {trending.map((t, idx) => (
                    <li
                        key={idx}
                        className="btn btn-primary mb-2"
                        style={{ marginRight: '.25rem' }}
                    >
                        <Link
                            style={{ color: 'white', textDecoration: 'none' }}
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
