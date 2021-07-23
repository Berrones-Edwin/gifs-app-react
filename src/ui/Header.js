import SearchForm from 'components/SearchForm'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="navbar-light navbar-sticky header-static">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img
                            className="navbar-brand-item light-mode-item"
                            src="assets/images/logo.svg"
                            alt="logo"
                        />
                        <img
                            className="navbar-brand-item dark-mode-item"
                            src="assets/images/logo-light.svg"
                            alt="logo"
                        />
                    </a>

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

                    <ul className="navbar-nav navbar-nav-scroll ms-auto">
                        <li className="nav-item ">
                            <NavLink
                                className="nav-link"
                                to="/"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav ms-sm-3 flex-nowrap align-items-center">
                        {/* <div className="nav-item">
                            <div className="modeswitch" id="darkModeSwitch">
                                <div className="switch"></div>
                            </div>
                        </div> */}

                        {/* <div className="nav-item d-none d-md-block">
                            <a
                                href="ht"
                                className="btn btn-sm btn-danger mb-0 mx-2"
                            >
                                Subscribe!
                            </a>
                        </div> */}
                        <div className="nav-item dropdown nav-search dropdown-toggle-icon-none">
                            <button
                                className="nav-link pe-0 dropdown-toggle"
                                id="navSearch"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaSearch />
                            </button>
                            <div
                                className="dropdown-menu dropdown-menu-end shadow rounded p-2"
                                aria-labelledby="navSearch"
                            >
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
