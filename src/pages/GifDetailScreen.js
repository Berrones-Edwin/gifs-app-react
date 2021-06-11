import React from "react";
import { useParams, Redirect } from "react-router";
import useSingleGif from "hooks/useSingleGif";
import Loader from "components/Loader/Loader";
import Helmet from "react-helmet"

const GifDetailScreen = () => {
    const { id } = useParams();
    const { gif, isLoading, error } = useSingleGif({ id });

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title> Loading...</title>
                </Helmet>
                <Loader />;
            </>
        );
    }
    if (error) return <Redirect to="/404" />;
    if (!gif) return null;

    return (
        <>
            <Helmet>
                <title> {gif.title || "Gif Details"} </title>
            </Helmet>
            <h3>
                {gif.title} - {id}
            </h3>

            <img src={gif.image} alt={gif.title} />
        </>
    );
};

export default GifDetailScreen;
