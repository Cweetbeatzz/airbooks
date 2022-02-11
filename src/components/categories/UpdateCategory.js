import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategoryAction } from "../../redux/actions/categoryActions";

function UpdateCategory(props) {
  let CategoryId = props.id;
  const [getCategoryName, setCategoryName] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategoryAction(CategoryId));
  };

  useEffect(() => {}, [dispatch, CategoryId]);
  return (
    <div>
      <br />
      <br />
      <div class="text-center">
        <h4>
          <strong>EDIT CATEGORY</strong>
        </h4>
      </div>
      <hr />
      <div class="container p-3">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <form
              asp-action="Edit"
              class="text-center justify-content-center"
              onSubmit={onFormSubmit}
            >
              <div asp-validation-summary="ModelOnly" class="text-danger"></div>
              <input type="hidden" asp-for="Id" />
              <div class="form-group">
                <label asp-for="Name" class="control-label"></label>
                <input
                  asp-for="Name"
                  class="form-control"
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <span asp-validation-for="Name" class="text-danger"></span>
              </div>
              <br />
              <div class="form-group">
                <button type="submit" value="Edit" class="btn btn-primary">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCategory;
