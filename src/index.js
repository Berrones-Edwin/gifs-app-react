import React from "react";
import ReactDOM from "react-dom";
import { GifContextProvider } from "./context/GifContextProvider";
import "./index.css";
import { RoutesApp } from "./routes/RoutesApp";

ReactDOM.render(
    <GifContextProvider>
        <RoutesApp />
    </GifContextProvider>,
    document.getElementById("root")
);
