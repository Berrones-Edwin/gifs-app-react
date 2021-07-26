import React from 'react'
import { Link } from 'react-router-dom'
import FavButton from './FavButton'

function GridGifItem({ title, image, id, datetime_imp, rating }) {
    let path = `/gifs/details/${id}`

    return (
        <>
            <div className="col-sm-6  col-lg-6">
                <div className="card card-overlay-bottom card-img-scale">
                    <img src={image} alt={title} />

                    <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                        <div>
                            <FavButton id={id} />
                        </div>
                        <Link to={path} className="text-white w-100 mt-auto">
                            <h4>{title}</h4>

                            <ul className="nav nav-divider text-white-force align-items-center small">
                                <li className="nav-item text-white">
                                    <span>{datetime_imp}</span>
                                </li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(
    GridGifItem,
    (prevProps, nextProps) => prevProps.id === nextProps.id
)
