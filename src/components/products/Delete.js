import React from "react";

function Delete() {
  return (
    <div>
      <div class="text-center">
        <h4>
          <strong>DELETE PRODUCT</strong>
        </h4>
        <div>
          <h4>Are you sure you want to delete this?</h4>
        </div>
      </div>
      <hr />
      <div>
        <hr />
        <dl class="container justify-content-center row">
          <dt class="col-sm-2">BusinessName</dt>
          <dd class="col-sm-10">BusinessName</dd>
          <dt class="col-sm-2">ProductName</dt>
          <dd class="col-sm-10">ProductName</dd>
          <dt class="col-sm-2">Description</dt>
          <dd class="col-sm-10">Description</dd>
          <dt class="col-sm-2">Image</dt>
          <dd class="col-sm-10">Image</dd>
          <dt class="col-sm-2">Price</dt>
          <dd class="col-sm-10">Price</dd>
          <dt class="col-sm-2">ReleaseDate</dt>
          <dd class="col-sm-10">ReleaseDate</dd>
        </dl>

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

export default Delete;
