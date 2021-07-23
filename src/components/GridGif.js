import React from 'react'
import GridGifItem from './GridGifItem'

export default function GridGif({ gifs }) {
    return (
        <>
            <section className="position-relative pt-0">
                <div className="row gy-4">
                    {gifs.map(({ id, title, image, datetime_imp, rating }) => (
                        <GridGifItem
                            key={id}
                            id={id}
                            title={title}
                            image={image}
                            datetime_imp={datetime_imp}
                            rating={rating}
                        />
                    ))}
                </div>
            </section>
        </>
    )
    // return (
    //     <>
    //         <div className="row row-cols-1 row-cols-md-2 g-4">
    //             {gifs.map(({ id, title, image }) => (
    //                 <div className="col">
    //                     <GridGifItem
    //                         key={id}
    //                         id={id}
    //                         title={title}
    //                         image={image}
    //                     />
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // )
}
