import React, { useState, useRef } from "react";
import Front from "../Layouts/Front";
import { Inertia } from "@inertiajs/inertia";
const login = ({ errors }) => {
    
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        e.persist();
        setValues(values => ({ ...values, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);
        Inertia.post("/login", formData);
    }
    return (
        <Front title="Login User">
        <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form method="POST" onSubmit={handleSubmit}>
            
            <div className="form-group row">
              <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
              <div className="col-md-6">
                <input id="email" onChange={handleChange} type="email" className="form-control {errors.email && 'is-invalid' }" name="email" value={values.email} required />
                {errors.email &&
                
                  <small className="alert alert-danger">{errors.email}</small>
                
                }
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
              <div className="col-md-6">
                <input id="password" onChange={handleChange} type="password" className="form-control {errors.password && 'is-invalid' }" value={values.password} name="password" required />
                {errors.password &&
                
                  <small className="alert alert-danger">{errors.password}</small>
                
                }
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6 offset-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="remember" id="remember"  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row mb-0">
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                
                <a className="btn btn-link" href="/password/reset/{token}">
                  Forgot Your Password
                </a>
                
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

export default login;
