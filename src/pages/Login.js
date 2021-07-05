import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Login = () => {
    const { push } = useHistory();
    const { isLoggenIn, login, isLoginLoading, hasLoginError } = useUser();

    const [values, setValues] = useState({
        username: "edwin@gmail.com",
        password: "password",
    });
    const { username, password } = values;

    const handleChangeInputValue = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length > 0 && username.length > 8) {
            login({ email: username, password });
        }
    };

    useEffect(() => {
        if (isLoggenIn)
            push({
                pathname: "/",
            });
    }, [isLoggenIn, push]);

    return (
        <>
            <h3>Sign in</h3>
            {isLoginLoading && <Loader />}
            {!isLoginLoading && (
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                autoComplete="off"
                                name="username"
                                onChange={handleChangeInputValue}
                                value={username}
                                type="text"
                                className="form-control"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                name="password"
                                className="form-control"
                                onChange={handleChangeInputValue}
                                value={password}
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Login"
                        />
                    </form>
                </div>
            )}

            {hasLoginError && <h5>The credentials is not valids</h5>}
        </>
    );
};

export default Login;
