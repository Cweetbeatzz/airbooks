import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../products/Message";
import Loading from "../products/Loading";
import {
  roleListAction,
  updateRoleAction,
} from "../../redux/actions/rolesActions";

function RoleUpdate() {
  //#################################################################
  const [getRoleName, setRoleName] = useState();

  const dispatch = useDispatch();
  //#################################################################

  const handleFormSubmit = (e) => {
    //#######
    e.preventDefault();

    dispatch(updateRoleAction(getRoleName));
  };
  //#################################################################

  //#################################################################
  useEffect(() => {
    dispatch(roleListAction());
  }, [dispatch]);

  //#################################################################
  return (
    <div>
      <br />
      <br />
      <div class="text-center text-info">
        <h4>
          <strong>EDIT PRODUCT</strong>
        </h4>
      </div>
      <hr />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form
              asp-action="Create"
              encType="multipart/form-data"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div asp-validation-summary="ModelOnly" class="text-danger"></div>
              <div class="form-group m-2">
                <label class="control-label"> Role Name</label>
                <input
                  name="RoleName"
                  class="form-control"
                  onChange={(e) => setRoleName(e.target.value)}
                />
                <span asp-validation-for="RoleName" class="text-danger"></span>
              </div>

              <br />
              <div class="form-group">
                <button
                  type="submit"
                  value="Create"
                  class="btn btn-primary"
                  style={{ width: "300px" }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
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
      <br />
    </div>
  );
}

export default RoleUpdate;
