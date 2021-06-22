import React, { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router";

import GridGif from "components/GridGif";
import Loader from "components/Loader/Loader";
import useFetchGifs from "hooks/useFetchGifs";
import { useGetGifs } from "hooks/useGetGifs";
import { useNearScreen } from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import Helmet from "react-helmet";
import SearchForm from "components/SearchForm";

const SearchResultScreen = () => {
    const { keyword, rating } = useParams();


    const { loading, keywordToUse, setPage } = useFetchGifs({
        keyword,
        rating,
    });

    const gifs = useGetGifs();

    const externalRef = useRef();

    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleNextPage = useCallback(
        debounce(() => setPage((prevPage) => prevPage + 1), 200),
        [setPage]
    );

    useEffect(
        function () {
            if (isNearScreen) {
                debounceHandleNextPage();
            }
        },
        [debounceHandleNextPage, isNearScreen]
    );

    return (
        <>
            <Helmet>
                <title> {keyword || "Search Page"} </title>
            </Helmet>

            <h3>{keywordToUse}</h3>
            <SearchForm initialRating={rating} ínitialKeyword={keyword} />
            {loading && <Loader />}
            <GridGif gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
        </>
    );
};

export default SearchResultScreen;
