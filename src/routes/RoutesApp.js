import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error404Screen from "../pages/Error404Screen";
import GifDetailScreen from "../pages/GifDetailScreen";
import GifScreen from "../pages/GifScreen";
import HomeScreen from "../pages/HomeScreen";
import TrendingScreen from "../pages/TrendingScreen";

import NavBar from "../ui/NavBar";

export const RoutesApp = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeScreen}></Route>
                        <Route
                            exact
                            path="/gifs/:keyword"
                            component={GifScreen}
                        />
                        <Route
           
                            exact
                            path="/gifs/details/:id"
                            component={GifDetailScreen}
                        />
                        <Route
                            exact
                            path="/trending/:keyword"
                            component={TrendingScreen}
                        />
                        <Route path="*" component={Error404Screen} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
};
