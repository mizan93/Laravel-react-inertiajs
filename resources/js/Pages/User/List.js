import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import Front from "../../Layouts/Front";

const List = ({ users, create_url, edit_url,msg }) => {
    return (
        <Front title="User crud operetion">
            <div className="row">
                
                <div className="col-md-6 offset-md-3">
                    <div className="container">
                    <h3>
                    {" "}
                    User list----------------{" "}
                    <InertiaLink href={create_url}>Create new</InertiaLink>
                </h3>
                
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                        <p>
                                            <InertiaLink href={user.edit_url}>
                                                edit
                                            </InertiaLink>{" "}
                                            | <InertiaLink replace method="POST" data={{_method:'delete',}} href={user.delete_url}>delete</InertiaLink>
                                            </p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Front>
    );
};
export default List;
