import useUser from "hooks/useUser";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const { isLoggenIn, logout } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <span className="navbar-brand">Gifs</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        {isLoggenIn && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favorites">
                                    Favorites
                                </NavLink>
                            </li>
                        )}
                        <li className="nav-item"></li>
                    </ul>

                    <ul className="navbar-nav">
                        {isLoggenIn ? (
                            <li className="nav-item">
                                <span
                                    style={{ cursor: "pointer" }}
                                    className="nav-link"
                                    onClick={logout}
                                >
                                    Logout
                                </span>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/register"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
