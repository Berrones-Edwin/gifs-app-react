import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        // <nav className="navbar navbar-light bg-light">
        //     <ul className="navbar-nav">
        //         <li className="nav-item">
        //             <NavLink className="nav-link" to="/">
        //                 Home
        //             </NavLink>
        //         </li>
        //     </ul>
        // </nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div class="container-fluid">
                <span class="navbar-brand">
                    Gifs
                </span>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home 
                            </NavLink>
                        </li>
                        <li class="nav-item"></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
