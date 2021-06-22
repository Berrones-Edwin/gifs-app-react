import React from "react";
import { useParams, Redirect } from "react-router";
import useSingleGif from "hooks/useSingleGif";
import Loader from "components/Loader/Loader";
import Helmet from "react-helmet";

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

            <div class="card" style={{ width: "18rem" }}>
                <img src={gif.image} className="card-img-top" alt={gif.title} />
                <div class="card-body">
                    <h5 class="card-title">
                        {gif.title}
                    </h5>
                </div>
            </div>
        </>
    );
};

export default GifDetailScreen;
