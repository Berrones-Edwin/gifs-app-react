import React, { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router";
import GridGif from "components/GridGif";
import useFetchGifs from "hooks/useFetchGifs";
import { useGetGifs } from "hooks/useGetGifs";
import { useNearScreen } from "hooks/useNearScreen";
import debounce from "just-debounce-it";

const GifScreen = () => {
    const { keyword } = useParams();

    const { loading, keywordToUse, setPage } = useFetchGifs({ keyword });
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
                // console.log(gifs);
            }
        },
        [debounceHandleNextPage, isNearScreen]
    );

    return (
        <>
            <h3>{keywordToUse}</h3>
            {loading && <p>Loading data...</p>}
            <GridGif gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
        </>
    );
};

export default GifScreen;
