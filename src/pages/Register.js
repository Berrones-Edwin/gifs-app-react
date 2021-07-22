import useUser from 'hooks/useUser'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loader from '../components/Loader/Loader'

const Register = () => {
    const { push } = useHistory()
    const { isLoggenIn, register, isRegisterLoading, hasRegisterError } =
        useUser()

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
                <title> Register Page </title>
            </Helmet>
            {isRegisterLoading && <Loader />}
            {!isRegisterLoading && (
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
                        register({
                            email: values.username,
                            password: values.password,
                        })
                        setSubmitting(false)
                    }}
                >
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                                    <div className="bg-primary-soft rounded p-4 p-sm-5">
                                        <h2>Create your free account</h2>

                                        <Form className="mt-4">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    htmlhtmlhtmlhtmlFor="username"
                                                >
                                                    Email address
                                                </label>
                                                <Field
                                                    type="email"
                                                    className="form-control"
                                                    id="username"
                                                    aria-describedby="emailHelp"
                                                    placeholder="E-mail"
                                                    name="username"
                                                />
                                                <small
                                                    id="emailHelp"
                                                    className="form-text"
                                                >
                                                    We'll never share your email
                                                    with anyone else.
                                                </small>
                                                <ErrorMessage
                                                    component="div"
                                                    className="alert alert-danger"
                                                    name="username"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    htmlhtmlhtmlhtmlFor="password"
                                                >
                                                    Password
                                                </label>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="*********"
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    className="alert alert-danger"
                                                    name="password"
                                                />
                                            </div>

                                            <div className="row align-items-center">
                                                <div className="col-sm-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success"
                                                    >
                                                        Sign me up
                                                    </button>
                                                </div>
                                                <div className="col-sm-8 text-sm-end">
                                                    <span>
                                                        Have an account?
                                                        <Link to="/login">
                                                            <u>Sign in</u>
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Formik>
            )}
            {hasRegisterError && (
                <div className="alert alert-danger">
                    Opps!! An error ocurred. Try again later.
                </div>
            )}
        </>
    )
}

export default Register
