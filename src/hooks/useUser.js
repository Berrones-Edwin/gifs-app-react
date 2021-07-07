import React, { useContext, useCallback, useState } from "react";
import { userContext } from "context/UserContext";
import {
    loginWithUserAndPassword,
    logoutUserFirebase,
    registerWithUserAndPassword,
} from "services/auth";
import { useHistory } from "react-router-dom";

const useUser = () => {
    const { user, setUser } = useContext(userContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loadingRegister, setLoadingRegister] = useState(false);
    const [errorRegister, setErrorRegister] = useState(null);
    const { push } = useHistory();

    const login = useCallback(
        ({ email, password }) => {
            setLoading(true);
            loginWithUserAndPassword({ email, password })
                .then(({ user }) => {
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
        logoutUserFirebase().then(() => {
            setUser(null);
            push({
                pathname: "/",
            });
        });
    }, [setUser, push]);

    const register = useCallback(
        ({ email, password }) => {
            setLoadingRegister(true);
            registerWithUserAndPassword({ email, password })
                .then(({ user }) => {
                    setUser({
                        id: user.uid,
                        displayName: user.displayName,
                        email: user.email,
                    });
                    setLoadingRegister(false);
                })
                .catch((err) => {
                    setErrorRegister(err);
                    setLoadingRegister(false);
                })
                .finally(() => {
                    setLoadingRegister(false);
                });
        },
        [setUser]
    );

    return {
        isLoggenIn: Boolean(user),
        login,
        logout,
        isLoginLoading: loading,
        hasLoginError: error,
        register,
        isRegisterLoading: loadingRegister,
        hasRegisterError: errorRegister,
    };
};

export default useUser;
