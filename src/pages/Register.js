import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Register = () => {
    const { push } = useHistory();
    const { isLoggenIn, register, isRegisterLoading, hasRegisterError } =
        useUser();

    const [values, setValues] = useState({
        username: "",
        password: "",
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
            register({ email: username, password });
        }
    };

    useEffect(() => {
        if (isLoggenIn)
            setTimeout(() => {
                push({
                    pathname: "/",
                });
            }, 200);
    }, [isLoggenIn, push]);

    return (
        <>
            <Helmet>
                <title> Register Page </title>
            </Helmet>
            <h3>Register</h3>
            {isRegisterLoading && <Loader />}
            {!isRegisterLoading && (
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
                                required
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
                                required
                            />
                        </div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Register"
                        />
                    </form>
                </div>
            )}

            {hasRegisterError && (
                <h5>Opps!! An error ocurred. Try again later.</h5>
            )}
        </>
    );
};

export default Register;
