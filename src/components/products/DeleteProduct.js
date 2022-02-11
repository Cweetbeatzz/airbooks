import React from "react";
import { Link } from "react-router-dom";

function DeleteProduct() {
  return (
    <div class="container">
      <br />
      <br />
      <div class=" text-center">
        <h4>
          <strong>DELETE PRODUCT</strong>
        </h4>
        <div className="alert alert-danger">
          <h6>Are you sure you want to delete this?</h6>
        </div>
      </div>
      <div className=" justify-content-center">
        <hr />
        <dl class="container row  mx-auto">
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
        <hr />

        <div className="text-center">
          <form asp-action="Delete" className=" justify-content-center ">
            <input type="hidden" asp-for="Id" />
            <button type="submit" value="Delete" class="btn btn-danger">
              DELETE
            </button>
            {"  "}|{"  "}
            <Link to="/productlist" className="mx-auto">
              <strong>BACK</strong>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
