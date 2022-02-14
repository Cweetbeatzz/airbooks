import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCategoryAction,
  getAllCategoriesAction,
} from "../../redux/actions/categoryActions";
import { useParams } from "react-router-dom";
import Loading from "../products/Loading";
import Message from "../products/Message";

function DeleteCategory(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const categoryDetail = useSelector((state) => state.deleteCategory);
  const { loading, error, category } = categoryDetail;
  console.log(categoryDetail);
  const submitDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCategoryAction(id));
  };

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch, id]);
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
        <form method="post" onSubmit={submitDelete}>
          <hr />
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <dl class="row" key={category._id} id={category._id}>
              <dt class="col-sm-6">Category Name</dt>
              <dd class="col-sm-6">{category.categoryName}</dd>
            </dl>
          )}
          <hr class="btn-primary" />
          <input type="hidden" asp-for="Id" />
          <input type="submit" value="Delete" class="btn btn-danger" /> |
          <Link asp-action="Index" to="/categories">
            <strong>BACK</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default DeleteCategory;
