import React, { useState } from "react";

export const userContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};

export default UserContextProvider;
