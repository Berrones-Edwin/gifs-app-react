import React from "react";
import Helmet from "react-helmet";
import SearchForm from "components/SearchForm";
import GridGif from "components/GridGif";
import useFetchGifs from "hooks/useFetchGifs";
import { useGetGifs } from "hooks/useGetGifs";
import TrendingScreen from "./Tredings/index";

const HomeScreen = () => {
    const { loading, keywordToUse } = useFetchGifs();
    const gif = useGetGifs();
    return (
        <>
            <Helmet>
                <title> {keywordToUse || "Home Page"} </title>
            </Helmet>
            <div>
                <SearchForm />
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="text-center">Your Last Search <b>{keywordToUse}</b></h2>
                        <ul>
                            {loading && <p>Loading data...</p>}
                            <GridGif gifs={gif} />
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <TrendingScreen />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
