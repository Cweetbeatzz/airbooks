import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategoriesAction,
  updateCategoryAction,
} from "../../redux/actions/categoryActions";
import { useParams, useLocation } from "react-router-dom";

function UpdateCategory(props) {
  let { id } = useParams();
  const categoryDetail = useSelector((state) => state.updateCategory);
  let { category } = categoryDetail;
  const [getCategoryName, setCategoryName] = useState(category?.categoryName);

  console.log(categoryDetail);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategoryAction(id));
  };

  useEffect(() => {
    dispatch(updateCategoryAction(id));
  }, [dispatch, id]);
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
                  type="text"
                  name="name"
                  class="form-control"
                  onChange={(e) => setCategoryName(e.target.value)}
                  id="name"
                  value={getCategoryName}
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
