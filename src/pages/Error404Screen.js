import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Error404Screen = () => {
    return (
        <>
            <Helmet>
                <title> Page 404 </title>
            </Helmet>
            <section class="overflow-hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 text-center mx-auto my-0 my-md-5 py-0 py-lg-5 position-relative z-index-9">
                            <h1 class="display-1 text-primary">404</h1>
                            <h2>Page Not Found!</h2>
                            <p>
                                Either something went wrong or this page doesn't
                                exist anymore.
                            </p>

                            <Link to="/" class="btn btn-danger mt-3">
                                Back to home page
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error404Screen
