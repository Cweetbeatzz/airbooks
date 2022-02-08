import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryAction } from "../../actions/categoryActions";

function Create() {
  const [getCategoryName, setCategoryName] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategoryAction(getCategoryName));
  };
  return (
    <div>
      <div class="text-center">
        <h4>
          <strong>CREATE CATEGORY</strong>
        </h4>
      </div>
      <hr />
      <div class="container p-5">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <form
              asp-action="Create"
              class="text-center justify-content-center"
              onSubmit={onFormSubmit}
            >
              <div asp-validation-summary="ModelOnly" class="text-danger"></div>
              <div class="form-group">
                <label asp-for="Name" class="control-label"></label>
                <input
                  asp-for="Name"
                  class="form-control"
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <span asp-validation-for="Name" class="text-danger"></span>
              </div>
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

      <div class="text-center">
        <a asp-action="Index" class="btn btn-primary" href="link">
          <strong>BACK</strong>
        </a>
      </div>
    </div>
  );
}

export default Create;
