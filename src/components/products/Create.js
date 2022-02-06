import React from "react";

function Create() {
  return (
    <div>
      <div class="text-center">
        <h4>
          <strong>CREATE PRODUCT</strong>
        </h4>
      </div>
      <hr />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form
              asp-action="Create"
              enctype="multipart/form-data"
              method="post"
            >
              <div asp-validation-summary="ModelOnly" class="text-danger"></div>
              <div class="form-group">
                <label class="control-label"> Business Name</label>
                <input name="BusinessName" class="form-control" />
                <span
                  asp-validation-for="BusinessName"
                  class="text-danger"
                ></span>
              </div>
              <div class="form-group">
                <label asp-for="ProductName" class="control-label"></label>
                <input asp-for="ProductName" class="form-control" />
                <span
                  asp-validation-for="ProductName"
                  class="text-danger"
                ></span>
              </div>
              <div class="form-group">
                <label asp-for="Description" class="control-label"></label>
                <textarea
                  asp-for="Description"
                  rows="4"
                  class="form-control"
                  placeholder="Write a Description about the Product..."
                ></textarea>
                <span
                  asp-validation-for="Description"
                  class="text-danger"
                ></span>
              </div>
              <div class="form-group">
                <label asp-for="Image" class="control-label"></label>
                <div class="custom-file">
                  <input
                    asp-for="Image"
                    type="file"
                    class="form-control custom-file-input"
                    id="customfile"
                  />
                  <label class="custom-file-label" for="customfile">
                    Choose File
                  </label>
                </div>
                <span asp-validation-for="Image" class="text-danger"></span>
              </div>
              <div class="form-group">
                <label asp-for="Price" class="control-label"></label>
                <input asp-for="Price" class="form-control" />
                <span asp-validation-for="Price" class="text-danger"></span>
              </div>
              <div class="form-group">
                <label asp-for="CategoryId" class="control-label"></label>
                <select
                  asp-for="CategoryId"
                  class="form-control"
                  asp-items="@ViewBag.CategoryList"
                >
                  <option value="0"> Please Select a Category</option>
                </select>
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
