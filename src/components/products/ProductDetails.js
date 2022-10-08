import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../../redux/actions/productsActions";
import Loading from "./Loading";
import Message from "./Message";

function ProductDetails(props) {
  const dispatch = useDispatch();
  const { id } = useParams([]);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, products } = productDetails;
  console.log(products);

  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [dispatch, id]);

  // const display = loading ? "wfwfw" : error ? "ijioj" : "yiu";
  return (
    <div>
      <br />
      <div className="text-center container">
        <h2 className="text-info">
          <strong>PRODUCTS DETAILS</strong>
        </h2>
      </div>
      <hr />

      <div className="row card text-center m-3">
        <div className="bd-example bd-example-images m-4 mx-auto">
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div
              className="text-center d-md-flex"
              key={products._id}
              id={products._id}
            >
              <div className="text-center col-md-7">
                <img
                  src={`http://localhost:6800/${products.productImage}`}
                  id="productsDetailsimage"
                  className="artwork w-100 "
                  height="450"
                  alt=""
                />
              </div>
              <div className="col-5 my-auto mx-auto justify-content-md-start justify-content-center">
                <hr className="btn-dark w-50 text-center mx-auto" />
                <br />

                <h6>
                  <strong>Company</strong>
                </h6>
                <h6>{products.company}</h6>
                <br />

                <h6 className="text-dark">
                  <strong>Product Name</strong>
                </h6>
                <h6 className="text-info">
                  <strong>{products.productName}</strong>
                </h6>
                <br />

                <h6>
                  <strong>Category</strong>
                </h6>
                <h6>{products.category}</h6>
                <br />

                <h6>
                  <strong>Description</strong>
                </h6>
                <h6>{products.description}</h6>
                <br />

                <hr className="btn-dark w-50 text-center mx-auto" />
                <h6 className="text-dark">
                  <strong>Price</strong>
                </h6>
                <h6 className="text-info">
                  <strong>$ {products.price}</strong>
                </h6>
                <br />

                <a
                  className="btn button btn-dark btn-sm m-0 text-white"
                  href="ki"
                >
                  ADD TO CART
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    width="18"
                    height="18"
                    fill="currentColor "
                    className="bi bi-cart3"
                    viewBox="0 0 16 16 "
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84
                           4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z "
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
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
    </div>
  );
}

export default ProductDetails;
