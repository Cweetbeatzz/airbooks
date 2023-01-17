import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import FileBase64 from "react-file-base64";
import { useForm } from "react-hook-form";
import {
  createRoleAction,
  roleListAction,
} from "../../redux/actions/rolesActions";

function CreateRole() {
  //#################################################################
  const { control, handleSubmit } = useForm();
  //#################################################################

  const [getRoleName, setRoleName] = useState();

  const dispatch = useDispatch();
  //#################################################################

  const handleFormSubmit = (e) => {
    //#######
    e.preventDefault();

    dispatch(createRoleAction(getRoleName));
  };
  //#################################################################

  //#################################################################
  useEffect(() => {
    dispatch(roleListAction());
  }, [dispatch]);

  return (
    <div>
      <br />
      <br />
      <div class="text-center text-info">
        <h4>
          <strong>CREATE ROLE</strong>
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

export default CreateRole;
