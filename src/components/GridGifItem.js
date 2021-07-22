import React from 'react'
import { Link } from 'react-router-dom'
import FavButton from './FavButton'

function GridGifItem({ title, image, id }) {
    let path = `/gifs/details/${id}`

    // return (
    //     <>
    //         <Link to={path}>
    //             <div className="col-sm-6">
    //                 <div className="col-sm-6">
    //                     <div className="card">
    //                         <div className="position-relative">
    //                             <img
    //                                 className="card-img"
    //                                 src={image}
    //                                 alt={title}
    //                             />
    //                             <div className="card-img-overlay d-flex align-items-start flex-column p-3">
    //                                 <div className="w-100 mt-auto">
    //                                     <a
    //                                         href="https"
    //                                         className="badge bg-warning mb-2"
    //                                     >
    //                                         {/* <i className="fas fa-circle me-2 small fw-bold"></i>
    //                                     Fav */}
    //                                         <FavButton id={id} />
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="card-body px-0 pt-3">
    //                             <h4 className="card-title">{title}</h4>
    //                             <p className="card-text">{title}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </Link>
    //     </>
    // )
    return (
        <>
            {/* <div className="col-sm-6"> */}
            <Link to={path}>
                <div className="card">
                    <img
                        loading="lazy"
                        className="card-img-top"
                        src={image}
                        alt={title}
                    />
                </div>
            </Link>
            <div className="card-body d-flex justify-content-between">
                <p className="card-title"> {title}</p>
                <FavButton id={id} />
            </div>
            {/* </div> */}
        </>
    )
}

export default React.memo(
    GridGifItem,
    (prevProps, nextProps) => prevProps.id === nextProps.id
)
