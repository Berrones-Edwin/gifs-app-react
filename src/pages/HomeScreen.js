import React from 'react'
import Helmet from 'react-helmet'
import SearchForm from 'components/SearchForm'
import GridGif from 'components/GridGif'
import Loader from 'components/Loader/Loader'
import useFetchGifs from 'hooks/useFetchGifs'
import { useGetGifs } from 'hooks/useGetGifs'
import TrendingScreen from './Tredings/index'

const HomeScreen = () => {
    const { loading, keywordToUse } = useFetchGifs()
    const gif = useGetGifs()
    return (
        <>
            <Helmet>
                <title> {keywordToUse || 'Home Page'} </title>
            </Helmet>
            <div>
                <SearchForm />
                <div className="row">
                    <div className="col-lg-9">
                        <h2 className="text-center">
                            Your Last Search <b>{keywordToUse}</b>
                        </h2>
                        <ul>
                            {loading && <Loader />}
                            <GridGif gifs={gif} />
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-5 mt-lg-0">
                        <h4>lorem ipsum</h4>
                        {/* <TrendingScreen /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen
