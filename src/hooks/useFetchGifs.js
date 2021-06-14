import { useContext, useEffect, useState } from "react";
import GifContext from "context/GifContextProvider";

import getGifs from "services/getGifs";

const INITIAL_PAGE = 0;

export default function useFetchGifs({ keyword, rating } = { keyword: null,rating:'g' }) {
    const { setGifs } = useContext(GifContext);

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);

    const keywordToUse =
        keyword || localStorage.getItem("last_search") || "random";

    useEffect(() => {
        setLoading(true);

        getGifs({ keyword: keywordToUse, rating }).then((imgs) => {
            setGifs(imgs);
            setLoading(false);

            localStorage.setItem("last_search", keywordToUse);
        });
    }, [keyword, keywordToUse, rating, setGifs]);

    useEffect(() => {
        if (page === INITIAL_PAGE) return;

        setLoadingNextPage(true);
        getGifs({ keyword: keywordToUse, page, rating }).then((nextGifs) => {
            setGifs((prevGifs) => [...prevGifs, ...nextGifs]);
            setLoadingNextPage(false);
        });
    }, [keywordToUse, page, rating, setGifs]);

    return { loading, keywordToUse, loadingNextPage, setPage };
}
