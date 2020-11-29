import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Front from "../Layouts/Front";
import React, { useState } from "react";

const Register = ({ errors }) => {
    // const { base_url } = usePage().props;
    // const imageRef = useRef(null);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    function handleChange(e) {
        e.persist();
        setValues(values => ({ ...values, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
        // formData.append("image", imageRef.current.files[0])
        formData.append("password_confirmation", values.password_confirmation);
        Inertia.post("/register", formData);
    }
    return (
        <Front title="Register page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className="card-body">
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="name"
                                            className="col-md-4 col-form-label text-md-right"
                                        >
                                            Name
                                        </label>
                                        <div className="col-md-6">
                                            <input
                                                id="name"
                                                type="text"
                                                className="form-control "
                                                name="name"
                                                value={values.name}
                                                // defaultValue="{{ old('name') }}"

                                                onChange={handleChange}
                                            />
                                            {errors && (
                                                <span
                                                    className="invalid-feedback"
                                                    role="alert"
                                                >
                                                    <strong>
                                                        {errors.name}
                                                    </strong>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="email"
                                            className="col-md-4 col-form-label text-md-right"
                                        >
                                            E-Mail Address
                                        </label>
                                        <div className="col-md-6">
                                            <input
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            {errors && (
                                                <span
                                                    className="invalid-feedback"
                                                    role="alert"
                                                >
                                                    <strong>
                                                        {errors.email}
                                                    </strong>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="password"
                                            className="col-md-4 col-form-label text-md-right"
                                        >
                                            Password
                                        </label>
                                        <div className="col-md-6">
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            {errors && (
                                                <span
                                                    className="invalid-feedback"
                                                    role="alert"
                                                >
                                                    <strong>
                                                        {errors.password}
                                                    </strong>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="password_confirmation"
                                            className="col-md-4 col-form-label text-md-right"
                                        >
                                            Confirm Password
                                        </label>
                                        <div className="col-md-6">
                                            <input
                                                id="password_confirmation"
                                                type="password"
                                                className="form-control"
                                                name="password_confirmation"
                                                value={
                                                    values.password_confirmation
                                                }
                                                onChange={handleChange}
                                            />
                                            {errors && (
                                                <span
                                                    className="invalid-feedback"
                                                    role="alert"
                                                >
                                                    <strong>
                                                        {
                                                            errors.password_confirmation
                                                        }
                                                    </strong>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Front>
    );
};
export default Register;
