import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/trending">Trending Gifs</NavLink>
                </li>
                <li>
                    <NavLink to="/gifs">Search Gifs</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
