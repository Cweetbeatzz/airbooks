import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Message from "./Message";

function RoleDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams([]);
  const RoleDetail = useSelector((state) => state.RoleDetail);
  const { loading, error, roles } = RoleDetail;

  console.log(roles);

  useEffect(() => {
    dispatch(RoleDetailAction(id));
  }, [dispatch, id]);

  return (
    <div>
      <br />
      <div className="text-center container">
        <h2 className="text-info">
          <strong>ROLE DETAILS</strong>
        </h2>
      </div>
      <hr />

      <div className="row card text-center m-3">
        <div className="bd-example bd-example-images m-4 mx-auto">
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div
              className="text-center d-md-flex"
              key={roles._id}
              id={roles._id}
            >
              <div className="col-5 my-auto mx-auto justify-content-md-start justify-content-center">
                <hr className="btn-dark w-50 text-center mx-auto" />
                <br />

                <h6>
                  <strong>Role Name</strong>
                </h6>
                <h6>{roles.RoleName}</h6>
                <br />

                <br />
              </div>
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default RoleDetail;
