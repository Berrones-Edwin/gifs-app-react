import React from 'react'
import { useLocation } from 'react-router-dom'

const HeroImage = ({ title }) => {
    const { pathname } = useLocation()

    const titleHeader = pathname === '/' ? `Your Last Search ${title}` : title

    return (
        <section className="pb-4 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="card bg-dark-overlay-3 h-300 overflow-hidden card-bg-scale text-center text-black"
                            style={{
                                backgroundImage:
                                    "url('https://images.pexels.com/photos/2072060/pexels-photo-2072060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                                backgroundPosition: 'center left',
                                backgroundSize: 'cover',
                                minHeight: '250px',
                            }}
                        >
                            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                                <div className="col-md-8 m-auto bg-blur p-5 rounded-3 shadow-lg">
                                    <h1 className="text-white">
                                        {titleHeader}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroImage
