import { useNearScreen } from "hooks/useNearScreen";
import React, { Suspense } from "react";

const TrendingsSearches = React.lazy(() => import("./TrendingScreen"));

const TrendingScreenLazy = () => {
    const { isNearScreen, fromRef } = useNearScreen({
        distance: "100px",
    });

    return (
        <>
            <div ref={fromRef}>
                <Suspense fallback={null}>
                    {isNearScreen ? <TrendingsSearches /> : null}
                </Suspense>
            </div>
        </>
    );
};

export default TrendingScreenLazy;
