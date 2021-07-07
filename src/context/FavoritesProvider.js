import React, { useContext, useEffect, useState } from "react";
import { loadFavorites } from "services/favorites";
import { userContext } from "./UserContext";

export const FavoritesContext = React.createContext(null);

const FavoritesContextProvider = ({ children }) => {
    const { user } = useContext(userContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (user) loadFavorites({ uid: user.id }).then(setFavorites);
    }, [user]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
