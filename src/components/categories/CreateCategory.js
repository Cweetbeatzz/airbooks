import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createCategoryAction } from "../../redux/actions/categoryActions";

function CreateCategory() {
  const [getCategoryName, setCategoryName] = useState("");

  const dispatch = useDispatch();

  const onCategoryFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategoryAction(getCategoryName));
  };

  // useEffect(() => {}, []);
  return (
    <div>
      <br />
      <br />
      <div className="text-center">
        <h4>
          <strong>CREATE CATEGORY</strong>
        </h4>
      </div>
      <hr />
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <form
              className="text-center justify-content-center form"
              onSubmit={onCategoryFormSubmit}
              method="post"
            >
              <div
                asp-validation-summary="ModelOnly"
                className="text-danger"
              ></div>
              <div className="form-group">
                <label asp-for="Name" className="control-label">
                  {" "}
                  Category Name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  required
                  className="form-control"
                  placeholder="Enter Category Name"
                  onChange={(e) => setCategoryName(e.target.value)}
                  value={getCategoryName}
                  id="categoryName"
                />
                <span asp-validation-for="Name" className="text-danger"></span>
              </div>
              <br />
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "300px" }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link asp-action="Index" className="btn btn-primary" to="/categories">
          <strong>BACK</strong>
        </Link>
      </div>
    </div>
  );
}

export default CreateCategory;
