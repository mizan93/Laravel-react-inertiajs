import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Navbar = props => {
    const { url } = history.state;
    console.log(url);
    const { user } = usePage().props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <InertiaLink className="navbar-brand" href="/">
                Navbar
            </InertiaLink>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className={url == "/" ? "nav-item active" : "nav-item"}>
                        <InertiaLink className="nav-link" href="/">
                            Home <span className="sr-only">(current)</span>
                        </InertiaLink>
                    </li>
                    <li
                        className={
                            url == "/user" ? "nav-item active" : "nav-item"
                        }
                    >
                        <InertiaLink className="nav-link" href="/user">
                            User
                        </InertiaLink>
                    </li>
                </ul>
                {/* Right Side Of Navbar */}
                <ul className="navbar-nav ml-auto">
                    {/* Authentication Links */}
                    {!user.isLoggedIn && (
                        <React.Fragment>
                            <li className="nav-item">
                                <InertiaLink className="nav-link" href="/login">
                                    Login
                                </InertiaLink>
                            </li>

                            <li className="nav-item">
                                <InertiaLink
                                    className="nav-link"
                                    href="/register"
                                >
                                    Register
                                </InertiaLink>
                            </li>
                        </React.Fragment>
                    )}
                    {user.isLoggedIn && (
                        <React.Fragment>
                            <li className="nav-item dropdown">
                                <InertiaLink
                                    id="navbarDropdown"
                                    className="nav-link dropdown-toggle"
                                    // href="/user"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {user.name}
                                </InertiaLink>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <InertiaLink
                                        className="dropdown-item"
                                        href="/logout"
                                        method="POST"
                                    >
                                        Logout
                                    </InertiaLink>
                                </div>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
