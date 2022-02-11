import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createCategoryAction } from "../../redux/actions/categoryActions";

function CreateCategory() {
  const [getCategoryName, setCategoryName] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategoryAction(getCategoryName));
  };

  return (
    <div>
      <br />
      <br />
      <div class="text-center">
        <h4>
          <strong>CREATE CATEGORY</strong>
        </h4>
      </div>
      <hr />
      <div class="container p-3">
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
                  placeholder="Enter Category Name"
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <span asp-validation-for="Name" class="text-danger"></span>
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

      <div class="text-center">
        <Link asp-action="Index" class="btn btn-primary" to="/categories">
          <strong>BACK</strong>
        </Link>
      </div>
    </div>
  );
}

export default CreateCategory;
