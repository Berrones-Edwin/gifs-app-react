import { useContext, useEffect, useState } from "react";
import GifContext from "../context/GifContextProvider";

import getGifs from "../services/getGifs";

export default function useFetchGifs({ keyword, rating } = { keyword: null }) {
    const { setGifs } = useContext(GifContext);

    const [loading, setLoading] = useState(false);

    let keywordToUse =
        keyword || localStorage.getItem("last_search") || "random";
    useEffect(() => {
        setGifs([]);
        setLoading(true);
        getGifs({ keyword: keywordToUse, rating }).then((imgs) => {
            setGifs(imgs);
            setLoading(false);

            localStorage.setItem("last_search", keywordToUse);
        });
    },  [keyword, keywordToUse, rating, setGifs]);

    return [loading, keywordToUse,rating];
}
