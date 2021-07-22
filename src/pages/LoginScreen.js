import useUser from 'hooks/useUser'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useHistory, Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Loader from '../components/Loader/Loader'

const LoginScreen = () => {
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
            <section>
                <div className="container">
                    {isLoginLoading && <Loader />}
                    {!isLoginLoading && (
                        <div className="row">
                            <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                                <div className="p-4 p-sm-5 bg-primary-soft rounded">
                                    <h2>Log in to your account</h2>
                                    {/* <!-- Form START --> */}
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
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            login({
                                                email: values.username,
                                                password: values.password,
                                            })
                                            setSubmitting(false)
                                        }}
                                    >
                                        <Form className="mt-4">
                                            {/* <!-- Email --> */}
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    htmlFor="username"
                                                >
                                                    Email address
                                                </label>
                                                <Field
                                                    type="email"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="E-mail"
                                                    autocomplete="off"
                                                    name="username"
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    className="alert alert-danger"
                                                    name="username"
                                                />
                                            </div>
                                            {/* <!-- Password --> */}
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    htmlFor="password"
                                                >
                                                    Password
                                                </label>
                                                <Field
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="*********"
                                                    autocomplete="off"
                                                    name="password"
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    className="alert alert-danger"
                                                    name="password"
                                                />
                                            </div>
                                            {/* <!-- Button --> */}
                                            <div className="row align-items-center">
                                                <div className="col-sm-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success"
                                                    >
                                                        Sign me in
                                                    </button>
                                                </div>
                                                <div className="col-sm-8 text-sm-end">
                                                    <span>
                                                        Don't have an account?
                                                        <Link to="/register">
                                                            Sign up{' '}
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {hasLoginError && (
                <div className="alert alert-danger">
                    The credentials is not valids
                </div>
            )}
        </>
    )
}

export default LoginScreen
