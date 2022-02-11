import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategoryAction } from "../../redux/actions/categoryActions";

function DeleteCategory(props) {
  const categoryId = props.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteCategoryAction(categoryId));
  }, [dispatch, categoryId]);
  //#####################################################################
  return (
    <div>
      <br />
      <br />
      <div class="text-center">
        <h4>
          <strong>DELETE CATEGORY</strong>
        </h4>
        <div className="alert alert-danger">
          <h6>Are you sure you want to delete this?</h6>
        </div>
      </div>
      <hr />

      <div class="container text-center">
        <hr />
        <dl class="row">
          <dt class="col-sm-6">Name</dt>
          <dd class="col-sm-6">Name</dd>
        </dl>
        <hr class="btn-primary" />
        <form asp-action="Delete">
          <input type="hidden" asp-for="Id" />
          <input type="submit" value="Delete" class="btn btn-danger" /> |
          <a asp-action="Index" href="link">
            <strong>BACK</strong>
          </a>
        </form>
      </div>
    </div>
  );
}

export default DeleteCategory;
