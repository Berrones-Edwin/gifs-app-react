import React, { lazy, Suspense, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { firebase } from "../firebase/firebase";

import NavBar from "ui/NavBar";
import Loader from "components/Loader/Loader";
import { userContext } from "context/UserContext";

const HomeScreen = lazy(() => import("pages/HomeScreen"));
const SearchResultScreen = lazy(() => import("pages/SearchResultScreen"));
const GifDetailScreen = lazy(() => import("pages/GifDetailScreen"));
const Error404Screen = lazy(() => import("pages/Error404Screen"));
const Login = lazy(() => import("pages/Login"));
const Register = lazy(() => import("pages/Register"));

export const RoutesApp = () => {
    const { setUser } = useContext(userContext);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                setUser({
                    id: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                });
            }
        });
    }, [setUser]);

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Suspense fallback={<Loader />}>
                    <div className="container">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={HomeScreen}
                            ></Route>

                            <Route
                                exact
                                path="/gifs/details/:id"
                                component={GifDetailScreen}
                            />
                            <Route
                                exact
                                path="/gifs/:keyword/:rating?"
                                component={SearchResultScreen}
                            />
                            <Route
                                exact
                                path="/404"
                                component={Error404Screen}
                            />
                            <Route exact path="/login" component={Login} />
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <Route path="*" component={Error404Screen} />
                        </Switch>
                    </div>
                </Suspense>
            </BrowserRouter>
        </>
    );
};
