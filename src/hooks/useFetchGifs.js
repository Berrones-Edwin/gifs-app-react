import { useContext, useEffect, useState } from "react";
import GifContext from "context/GifContextProvider";

import getGifs from "services/getGifs";

const INITIAL_PAGE = 0;

export default function useFetchGifs({ keyword, rating } = { keyword: null }) {
    const { setGifs } = useContext(GifContext);

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);

    const keywordToUse =
        keyword || localStorage.getItem("last_search") || "random";

    useEffect(() => {
        setGifs([]);
        setLoading(true);
        getGifs({ keyword: keywordToUse, rating, page }).then((imgs) => {
            setGifs(imgs);
            setLoading(false);

            localStorage.setItem("last_search", keywordToUse);
        });
    }, [keyword, keywordToUse, rating, setGifs, page]);

    useEffect(() => {
        if (page === INITIAL_PAGE) return;

        setLoadingNextPage(true);
        getGifs({ keyword: keywordToUse, rating }).then((imgs) => {
            setGifs((prevImgs) => setGifs([...prevImgs, imgs]));
            setLoadingNextPage(false);

            localStorage.setItem("last_search", keywordToUse);
        });
    }, [keywordToUse, page, rating, setGifs]);

    return [loading, keywordToUse, loadingNextPage, setPage];
}
