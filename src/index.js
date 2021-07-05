import React from "react";
import ReactDOM from "react-dom";
import { GifContextProvider } from "./context/GifContextProvider";
import "./index.css";
import { RoutesApp } from "./routes/RoutesApp";
import "bootstrap/dist/css/bootstrap.css";
import UserContextProvider from "context/UserContext";

ReactDOM.render(
    <UserContextProvider>
        <GifContextProvider>
            <RoutesApp />
        </GifContextProvider>
    </UserContextProvider>,
    document.getElementById("root")
);
