import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

import Front from "../../Layouts/Front";

const Edit = (props) => {
    const {id,name,email,errors}=props;
    const [values, setValues] = useState({
        id,
        name ,
        email

    });

    function handleChange(e) {
        e.persist();
        setValues(values => ({ ...values, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("id", values.id);
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("_method", 'PUT');
        Inertia.post("/user/"+values.id, formData,{});
    }
    return (
        <Front title="User crud operetion">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="container">
                        <h3>
                            {" "}
                            Edit user ----------------{" "}
                            <InertiaLink href="/user">User list</InertiaLink>
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="col-sm-1-12 col-form-label"
                                >
                                    Name{" "}
                                </label>
                                <div className="col-sm-1-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                    {errors && (
                                        <small className="alert alert-danger">
                                            {errors.name}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="col-sm-1-12 col-form-label"
                                >
                                    Email{" "}
                                </label>
                                <div className="col-sm-1-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors && (
                                        <small className="alert alert-danger">
                                            {errors.email}
                                        </small>
                                    )}
                                </div>
                            </div>

                           
                            <div className="form-group">
                                <div className="offset-sm-2 col-sm-10">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Front>
    );
};
export default Edit;
