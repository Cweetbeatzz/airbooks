import React from "react";

function ProductDetails() {
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
        <div className="bd-example bd-example-images m-4">
          <div className="text-center">
            <img
              src="{{productsDetails.image.url}}"
              id="productsDetailsimage"
              className="artwork"
              width="300"
              alt=""
            />
          </div>
          <div className="text-center">
            <hr className="btn-dark w-50 text-center mx-auto" />
            <h6>BusinessName</h6>
            <h6 className="text-info">
              <strong>name</strong>
            </h6>
            <h6>category</h6>
            <h6>description</h6>
            <hr className="btn-dark w-50 text-center mx-auto" />
            <h6 className="text-info">
              <strong>price</strong>
            </h6>
            <a className="btn button btn-dark btn-sm m-0 text-white" href="ki">
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
      </div>
      <hr />
    </div>
  );
}

export default ProductDetails;
