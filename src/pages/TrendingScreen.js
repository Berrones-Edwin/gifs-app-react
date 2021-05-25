import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import GridGif from "../components/GridGif";
import { getTrendingGifs } from "../services/getTrendings";

const TrendingScreen = () => {
    const [category, setCategory] = useState(null);
    const [trending, setTrending] = useState([]);
    const { keyword } = useParams();

    useEffect(() => {
        if (keyword) setCategory(keyword);
    }, [keyword]);

    useEffect(() => {
        getTrendingGifs().then((trendings) => {
            setTrending(trendings);
        });
    }, []);

    if (trending.length === 0) return <p>Not trending</p>;

    return (
        <div>
            <ul>
                {trending.map((t) => (
                    <li>
                        <NavLink key={t} to={`trending/${t}`}>
                            {t}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {category && <GridGif category={category} />}
        </div>
    );
};

export default TrendingScreen;
