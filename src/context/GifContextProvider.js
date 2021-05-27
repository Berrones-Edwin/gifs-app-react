import React, { useState } from "react";


const GifContext = React.createContext(null);

export const GifContextProvider = ({ children }) => {
    const [gif, setGifs] = useState([]);
   
    return (
        <GifContext.Provider
            value={{
                gif,
                setGifs,
            }}
        >
            {children}
        </GifContext.Provider>
    );
};

export default GifContext;
