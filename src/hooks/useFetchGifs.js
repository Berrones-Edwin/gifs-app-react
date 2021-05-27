import { useContext, useEffect, useState } from "react";
import GifContext from "../context/GifContextProvider";

import getGifs from "../services/getGifs";

export default function useFetchGifs(category = null) {
    const {setGifs } = useContext(GifContext);

    const [loading, setLoading] = useState(false);

    let keywordToUse =
        category || localStorage.getItem("last_search") || "random";
    useEffect(() => {
        setGifs([]);
        setLoading(true);
        getGifs(keywordToUse).then((imgs) => {
            setGifs(imgs);
            setLoading(false);

            localStorage.setItem("last_search", keywordToUse);
        });
    }, [keywordToUse, setGifs]);

    return [ loading, keywordToUse];
}
