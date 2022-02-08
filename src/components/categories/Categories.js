import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../actions/categoryActions";

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
      <div class="container-fluid">
        <div class="text-center">
          <h4>
            <strong>CATEGORIES</strong>
          </h4>
          <hr class="btn-dark" style={{ width: "300px" }} />
        </div>
        <div class="text-center">
          <p>
            <a class="btn btn-primary" style={{ width: "300px" }} href="link">
              Create New
            </a>
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
                  <a asp-action="Edit" href="item.Id">
                    <strong>EDIT</strong>
                  </a>{" "}
                  |
                  <a asp-action="Delete" href="item.Id">
                    <strong>DELETE</strong>
                  </a>
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
