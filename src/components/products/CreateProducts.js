import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../redux/actions/categoryActions";
import { createProductAction } from "../../redux/actions/productsActions";

function CreateProducts() {
  //#################################################################
  const categorylist = useSelector((state) => state.categoryList);
  const { loading, error, category } = categorylist;
  console.log(category);

  const [getProductName, setProductName] = useState();
  const [getPrice, setPrice] = useState();
  const [getcategory, setcategory] = useState();
  const [getcompany, setcompany] = useState();
  const [getproductImage, setproductImage] = useState();
  const [getdescription, setdescription] = useState();

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    //#######
    e.preventDefault();
    //#######
    dispatch(
      createProductAction(
        getProductName,
        getPrice,
        getcategory,
        getcompany,
        getproductImage,
        getdescription
      )
    );
  };
  //#################################################################
  useEffect(() => {
    dispatch(getAllCategoriesAction);
  }, [dispatch]);

  return (
    <div>
      <br />
      <br />
      <div class="text-center text-info">
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
              onSubmit={handleFormSubmit}
            >
              <div asp-validation-summary="ModelOnly" class="text-danger"></div>
              <div class="form-group m-2">
                <label class="control-label"> Business Name</label>
                <input
                  name="BusinessName"
                  class="form-control"
                  onChange={(e) => setcompany(e.target.value)}
                />
                <span
                  asp-validation-for="BusinessName"
                  class="text-danger"
                ></span>
              </div>

              <div class="form-group m-2">
                <label asp-for="ProductName" class="control-label">
                  Product Name
                </label>
                <input
                  asp-for="ProductName"
                  class="form-control"
                  onChange={(e) => setProductName(e.target.value)}
                />
                <span
                  asp-validation-for="ProductName"
                  class="text-danger"
                ></span>
              </div>

              <div class="form-group m-2">
                <label asp-for="Description" class="control-label">
                  Description
                </label>
                <textarea
                  asp-for="Description"
                  rows="4"
                  class="form-control"
                  placeholder="Write a Description about the Product..."
                  onChange={(e) => setdescription(e.target.value)}
                ></textarea>
                <span
                  asp-validation-for="Description"
                  class="text-danger"
                ></span>
              </div>

              <div class="form-group m-2">
                <label asp-for="Image" class="control-label">
                  Choose File
                </label>
                <div class="custom-file">
                  <input
                    name="productImage"
                    type="file"
                    class="form-control custom-file-input"
                    id="customfile"
                    onChange={(e) => setproductImage(e.target.value)}
                  />
                </div>
                <span asp-validation-for="Image" class="text-danger"></span>
              </div>

              <div class="form-group m-2">
                <label asp-for="Price" class="control-label">
                  Price
                </label>
                <input
                  asp-for="Price"
                  class="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span asp-validation-for="Price" class="text-danger"></span>
              </div>

              <div class="form-group m-2">
                <label asp-for="CategoryId" class="control-label">
                  Category
                </label>
                <select
                  asp-for="CategoryId"
                  class="form-control"
                  asp-items="@ViewBag.CategoryList"
                  onSelect={(e) => setcategory(e.target.value)}
                >
                  <option value="0"> Please Select a Category</option>
                </select>
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
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default CreateProducts;
