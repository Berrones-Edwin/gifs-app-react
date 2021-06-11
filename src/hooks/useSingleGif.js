import { useGetGifs } from "./useGetGifs";
import getSingleGif from "services/getSingleGif";
import { useEffect, useState } from "react";

const useSingleGif = ({ id }) => {
    const gifs = useGetGifs();

    const gifContext = gifs.find((gif) => gif.id === id);

    const [gif, setGif] = useState(gifContext);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!gif) {
            setisLoading(true);
            getSingleGif({ id })
                .then((data) => {
                    setGif(data);
                    setisLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setisLoading(false);
                });
        }
    }, [id, gif]);

    return {
        gif,
        isLoading,
        error,
    };
};

export default useSingleGif;
