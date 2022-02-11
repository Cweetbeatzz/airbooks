import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoriesAction } from "../../redux/actions/categoryActions";

function Categories() {
  const [getCategoryList, setCategoryList] = useState("");

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, payload } = categoryList;

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return (
    <div>
      <br />
      <br />
      <div class="container-fluid">
        <div class="text-center">
          <h4>
            <strong>CATEGORIES</strong>
          </h4>
          <hr class="btn-dark mx-auto" style={{ width: "300px" }} />
        </div>
        <div class="text-center">
          <p>
            <Link
              class="btn btn-primary"
              style={{ width: "300px" }}
              to="/CreateCategory"
            >
              Create New
            </Link>
          </p>
        </div>
        <div class=" container container-border text-center">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <Link asp-action="Edit" to="/UpdateCategory">
                    <strong>EDIT</strong>
                  </Link>{" "}
                  |
                  <Link asp-action="Delete" to="/deletecategory">
                    <strong>DELETE</strong>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Categories;
