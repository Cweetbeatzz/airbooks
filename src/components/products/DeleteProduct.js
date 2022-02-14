import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deleteProductAction,
  productListAction,
} from "../../redux/actions/productsActions";

function DeleteProduct() {
  //###################################################

  const productDetail = useSelector((state) => state.delProduct);
  const { deleteProduct } = productDetail;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(productDetail);

  const handleDelete = () => {
    dispatch(deleteProductAction(id));
  };
  //###################################################

  //if delete successful refresh
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch, id]);
  //###################################################

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
        <form
          asp-action="Delete"
          className="justify-content-center"
          onClick={handleDelete}
        >
          <dl class="container row  mx-auto">
            <dt class="col-sm-2">BusinessName</dt>
            <dd class="col-sm-10">{deleteProduct.company}</dd>
            <dt class="col-sm-2">ProductName</dt>
            <dd class="col-sm-10">{deleteProduct.productName}</dd>
            <dt class="col-sm-2">Description</dt>
            <dd class="col-sm-10">{deleteProduct.description}</dd>
            <dt class="col-sm-2">Image</dt>
            <dd class="col-sm-10">{deleteProduct.productImage}</dd>
            <dt class="col-sm-2">Price</dt>
            <dd class="col-sm-10">{deleteProduct.price}</dd>
          </dl>
          <hr />
          <div className="text-center">
            <input type="hidden" asp-for="Id" />
            <button type="submit" value="Delete" class="btn btn-danger">
              DELETE
            </button>
            {"  "}|{"  "}
            <Link to="/productlist" className="mx-auto">
              <strong>BACK</strong>
            </Link>
          </div>{" "}
        </form>
      </div>
    </div>
  );
}

export default DeleteProduct;
