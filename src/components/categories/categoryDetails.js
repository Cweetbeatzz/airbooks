import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCategoryByIdAction } from "../../redux/actions/categoryActions";
import Loading from "../products/Loading";
import Message from "../products/Message";

export default function CategoryDetails(props) {
  //##################################################################
  const { id } = useParams([]);

  const dispatch = useDispatch();
  const categoryDet = useSelector((state) => state.categoryById);
  const { loading, error, category } = categoryDet;

  //##################################################################
  console.log("categoryDet", categoryDet);
  //##################################################################

  useEffect(() => {
    dispatch(getCategoryByIdAction(id));
  }, [dispatch, id]);
  //##################################################################

  return (
    <div className="container">
      <div className="row card text-center m-3">
        <div className="bd-example bd-example-images m-4 mx-auto">
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div
              className="text-center d-md-flex"
              key={category._id}
              // id={category._id}
            >
              <div className="col-5 my-auto mx-auto justify-content-md-start justify-content-center">
                <hr className="btn-dark w-50 text-center mx-auto" />
                <br />

                <h6>
                  <strong>Category Name</strong>
                </h6>
                <h6>{category.categoryName}</h6>
                <br />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
