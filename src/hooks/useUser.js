import React, { useContext, useCallback, useState } from "react";
import { userContext } from "context/UserContext";
import { loginWithUserAndPassword, logoutUserFirebase } from "services/auth";

const useUser = () => {
    const { user, setUser } = useContext(userContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = useCallback(
        ({ email, password }) => {
            setLoading(true);
            loginWithUserAndPassword({ email, password })
                .then(({ user }) => {
                    console.log(user);
                    setUser({
                        id: user.uid,
                        displayName: user.displayName,
                        email: user.email,
                    });
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        [setUser]
    );

    const logout = useCallback(() => {
        logoutUserFirebase().then(() => setUser(null));
    }, [setUser]);

    return {
        isLoggenIn: Boolean(user),
        login,
        logout,
        isLoginLoading: loading,
        hasLoginError: error,
    };
};

export default useUser;
