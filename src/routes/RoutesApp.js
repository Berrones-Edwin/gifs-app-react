import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "ui/NavBar";
import Loader from "components/Loader/Loader";

const HomeScreen = lazy(() => import("pages/HomeScreen"));
const SearchResultScreen = lazy(() => import("pages/SearchResultScreen"));
const GifDetailScreen = lazy(() => import("pages/GifDetailScreen"));
const Error404Screen = lazy(() => import("pages/Error404Screen"));

export const RoutesApp = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Suspense fallback={<Loader />}>
                    <div>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={HomeScreen}
                            ></Route>
                            <Route
                                exact
                                path="/gifs/:keyword/:rating?"
                                component={SearchResultScreen}
                            />
                            {/* <Route
                                exact
                                path="/gifs/:keyword/:rating"
                                component={SearchResultScreen}
                            /> */}
                            <Route
                                exact
                                path="/gifs/details/:id"
                                component={GifDetailScreen}
                            />
                            <Route
                                exact
                                path="/404"
                                component={Error404Screen}
                            />
                            <Route path="*" component={Error404Screen} />
                        </Switch>
                    </div>
                </Suspense>
            </BrowserRouter>
        </>
    );
};
