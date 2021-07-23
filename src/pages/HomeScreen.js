import React from 'react'
import Helmet from 'react-helmet'
import SearchForm from 'components/SearchForm'
import GridGif from 'components/GridGif'
import Loader from 'components/Loader/Loader'
import useFetchGifs from 'hooks/useFetchGifs'
import { useGetGifs } from 'hooks/useGetGifs'
import TrendingScreen from './Tredings/index'
import HeroImage from 'components/HeroImage'

const HomeScreen = () => {
    const { loading, keywordToUse } = useFetchGifs()
    const gif = useGetGifs()

    if (loading) return <Loader />
    return (
        <>
            <Helmet>
                <title> {keywordToUse || 'Home Page'} </title>
            </Helmet>
            <HeroImage title={keywordToUse} />
            {/* <SearchForm /> */}
            <div className="row">
                <div className="col-lg-9">
                    <GridGif gifs={gif} />
                </div>
                <div className="col-lg-3 mt-5 mt-lg-0">
                    <TrendingScreen />
                </div>
            </div>
        </>
    )
}

export default HomeScreen
