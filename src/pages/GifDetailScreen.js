import React from 'react'
import { useParams, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import useSingleGif from 'hooks/useSingleGif'
import Loader from 'components/Loader/Loader'
import Helmet from 'react-helmet'

const GifDetailScreen = () => {
    const { id } = useParams()

    const { gif, isLoading, error } = useSingleGif({ id })

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title> Loading...</title>
                </Helmet>
                <Loader />;
            </>
        )
    }
    if (error) return <Redirect to="/404" />
    if (!gif) return null

    return (
        <>
            <Helmet>
                <title> {gif.title || 'Gif Details'} </title>
            </Helmet>

            <div className="card bg-transparent mb-4 mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <img
                            className="rounded-3"
                            src={gif.image}
                            alt={gif.title}
                        />
                    </div>
                    <div className="col-md-7 mt-3 mt-md-0">
                        <span className="badge bg-info mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Rating {gif.rating}
                        </span>
                        <h3>
                            <a
                                href="https"
                                className="btn-link stretched-link text-dark fw-bold"
                            >
                                {gif.title}
                            </a>
                        </h3>
                        <p>{gif.user && gif.user.description}</p>
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            {gif.user && (
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <div className="d-flex align-items-center position-relative">
                                            <div className="avatar avatar-xs">
                                                <img
                                                    className="avatar-img rounded-circle"
                                                    src={
                                                        gif.user.avatar_url ||
                                                        'https://via.placeholder.com/35'
                                                    }
                                                    alt="avatar"
                                                    width="35"
                                                    height="35"
                                                />
                                            </div>
                                            <span className="ms-3">
                                                by{' '}
                                                <Link
                                                    to={gif.user.profile_url}
                                                    className="stretched-link text-reset btn-link"
                                                >
                                                    {gif.user.username}
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            )}

                            <li className="nav-item">{gif.datetime_imp}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GifDetailScreen
