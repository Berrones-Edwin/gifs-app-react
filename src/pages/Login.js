import useUser from 'hooks/useUser'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Loader from '../components/Loader/Loader'

const Login = () => {
    const { push } = useHistory()
    const { isLoggenIn, login, isLoginLoading, hasLoginError } = useUser()

    useEffect(() => {
        if (isLoggenIn)
            setTimeout(() => {
                push({
                    pathname: '/',
                })
            }, 200)
    }, [isLoggenIn, push])

    return (
        <>
            <Helmet>
                <title> Login Page </title>
            </Helmet>
            <div className="card">
                <h3 className="text-center">Login </h3>
                {isLoginLoading && <Loader />}
                {!isLoginLoading && (
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .email('Invalid Email Address')
                                .required('Required'),
                            password: Yup.string()
                                .min(
                                    8,
                                    'The field password is invalid min 8 characters'
                                )
                                .required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            login({
                                email: values.username,
                                password: values.password,
                            })
                            setSubmitting(false)
                        }}
                    >
                        <div className="d-flex justify-content-center">
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="username">Username</label>
                                    <Field
                                        autoComplete="off"
                                        name="username"
                                        type="email"
                                        placeholder="Enter your username"
                                        className="form-control mb-2"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        className="alert alert-danger"
                                        name="username"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        autoComplete="off"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="form-control mb-2"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        className="alert alert-danger"
                                        name="password"
                                    />
                                </div>
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Login"
                                />
                            </Form>
                        </div>
                    </Formik>
                )}
                {hasLoginError && <h5>The credentials is not valids</h5>}
            </div>
        </>
    )
}

export default Login
