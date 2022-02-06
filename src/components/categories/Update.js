import React from "react";

function Update() {
  return (
    <div>
      <div class="text-center">
        <h4>
          <strong>EDIT CATEGORY</strong>
        </h4>
      </div>
      <hr />
      <div class="container p-5">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <form asp-action="Edit" class="text-center justify-content-center">
              <div asp-validation-summary="ModelOnly" class="text-danger"></div>
              <input type="hidden" asp-for="Id" />
              <div class="form-group">
                <label asp-for="Name" class="control-label"></label>
                <input asp-for="Name" class="form-control" />
                <span asp-validation-for="Name" class="text-danger"></span>
              </div>
              <div class="form-group">
                <button type="submit" value="Edit" class="btn btn-primary">
                  SAVE
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

export default Update;
