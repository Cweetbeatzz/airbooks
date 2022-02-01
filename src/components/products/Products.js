import React from "react";

function Products() {
  return (
    <div>
      <br />
      <div class="text-center container">
        <h1 class="text-info">
          <strong>PRODUCTS</strong>
        </h1>
      </div>
      <hr />

      <div class="container-fluid p-5 bg-light">
        <div class="productcontent justify-content-center justify-content-evenly">
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top w-100"
              src="images/1c3sveh71ipt.jpg "
              style={{ width: "150px" }}
              alt=" "
            />
            <span class="card-body d-flex justify-content-evenly">
              <a class="text-black" href="link">
                Name
              </a>
              <h6 class="text-info">
                <strong>Price</strong>
              </h6>
            </span>
            <button
              class="btn btn-dark btn-sm m-0 addtocart text-white"
              id="addtocart"
              value=""
              data-action="add"
              data-product="id"
            >
              ADD TO CART
              <svg
                xmlns="http://www.w3.org/2000/svg "
                width="18"
                height="18"
                fill="currentColor "
                class="bi bi-cart3"
                viewBox="0 0 16 16 "
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84
                           4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z "
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Products;
