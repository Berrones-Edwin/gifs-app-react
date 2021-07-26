import useGetGifsFavorites from 'hooks/useGetGifsFavorites'
import { Link } from 'react-router-dom'
import React from 'react'
import Helmet from 'react-helmet'
import HeroImage from 'components/HeroImage'
import GridGif from 'components/GridGif'
import Loader from 'components/Loader/Loader'

const FavoritesScreen = () => {
    const { gifFavorites, loading, error } = useGetGifsFavorites()

    if (loading) return <Loader />
    if (error) return null
    return (
        <>
            <Helmet>
                <title> My Gifs Favorites</title>
            </Helmet>
            <HeroImage title={'My Gifs Favorites'} />

            <div className="row">
                <div className="col-lg-12">
                    {gifFavorites.length === 0 ? (
                        <div class="alert alert-danger" role="alert">
                            You List of gifs Favorites is empty! <br />
                            <Link className="alert-link text-center" to="/">
                                Back to a home
                            </Link>
                        </div>
                    ) : (
                        <GridGif gifs={gifFavorites} />
                    )}
                </div>
            </div>
        </>
    )
}

export default FavoritesScreen
