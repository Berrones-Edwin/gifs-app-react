import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import useUser from 'hooks/useUser'

const Header = () => {
    const { isLoggenIn, logout } = useUser()

    return (
        <header className="navbar-light navbar-sticky header-static">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <span>My Gifs</span>
                    </Link>

                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="text-body h6 d-none d-sm-inline-block">
                            Menu
                        </span>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav navbar-nav-scroll ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                    id="homeMenu"
                                    activeClassName="active"
                                >
                                    Home
                                </NavLink>
                            </li>
                            {isLoggenIn && (
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/favorites"
                                        id="homeMenu"
                                        activeClassName="active"
                                    >
                                        Favorites
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="nav ms-sm-3 flex-nowrap align-items-center">
                        <div className="nav-item d-none d-md-block">
                            {isLoggenIn ? (
                                <button
                                    className="btn btn-sm btn-danger mb-0 mx-2"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="btn btn-sm btn-danger mb-0 mx-2"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                        <div className="nav-item dropdown nav-search">
                            {/* <span
                                className="nav-link pe-0 dropdown-toggle"
                                id="navSearch"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaSearch />
                            </span>
                            <div
                                className="dropdown-menu dropdown-menu-end shadow rounded p-2"
                                aria-labelledby="navSearch"
                            >
                        </div> */}
                            {/* <SearchForm /> */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
