import React, { useEffect, useState } from "react";
import Message from "../products/Message";
import Loading from "../products/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { roleListAction } from "../../redux/actions/rolesActions";

function Roles() {
  const dispatch = useDispatch();

  const rolesList = useSelector((state) => state.roleList);
  const { loading, error, roles } = rolesList;

  //##########################################################

  useEffect(() => {
    dispatch(roleListAction());
  }, [dispatch]);

  return (
    <div>
      <br />
      <div className="text-center container">
        <h1 className="text-info">
          <strong>ROLES</strong>
        </h1>
      </div>
      <br />
      <div className="text-center">
        <Link className="btn btn-primary" to="/createRole">
          <strong>CREATE ROLE</strong>
        </Link>
      </div>
      <hr />

      <div>
        <div className="container-fluid p-5 bg-light">
          <div className=" text-center">
            <table className="table table-striped w-100">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ROLE NAME</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <Loading></Loading>
                ) : error ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  roles.map((val) => (
                    <tr key={val._id}>
                      <td className="text-center py-5">{val.RoleName}</td>

                      <td className="text-center py-5">
                        <Link
                          to={`/UpdateRole/${val._id}`}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </Link>
                        {"  "}|{"  "}
                        <Link
                          to={`/rolesDetails/${val._id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Details
                        </Link>{" "}
                        |{"  "}
                        <Link
                          to={`/DeleteRole/${val._id}`}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Roles;
