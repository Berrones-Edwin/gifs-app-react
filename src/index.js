import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RoutesApp } from "./routes/RoutesApp";
import "bootstrap/dist/css/bootstrap.css";
import { GifContextProvider } from "./context/GifContextProvider";
import UserContextProvider from "context/UserContext";
import FavoritesContextProvider from "context/FavoritesProvider";

ReactDOM.render(
    <UserContextProvider>
        <GifContextProvider>
            <FavoritesContextProvider>
                <RoutesApp />
            </FavoritesContextProvider>
        </GifContextProvider>
    </UserContextProvider>,
    document.getElementById("root")
);
