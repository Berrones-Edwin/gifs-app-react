import React from "react";
import SearchForm from "components/SearchForm";
import GridGif from "components/GridGif";
import useFetchGifs from "hooks/useFetchGifs";
import { useGetGifs } from "hooks/useGetGifs";
import TrendingScreen from "./Tredings/index";

const HomeScreen = () => {
    const [loading, keyword] = useFetchGifs();
    const gif = useGetGifs();
    return (
        <div style={{minHeight:'100vh'}}>
           
            <SearchForm />
            
            <hr />
            <h2>Tu Última busqueda {keyword}</h2>
            <ul>
                {loading && <p>Loading data...</p>}
                <GridGif gifs={gif} />
            </ul>
            <TrendingScreen />
        </div>
    );
};

export default HomeScreen;
