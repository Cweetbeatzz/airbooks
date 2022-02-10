import React, { useEffect, useState } from "react";
import Message from "./Message";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../../redux/actions/productsActions";
import { Link } from "react-router-dom";

function ProductList(props) {
  //##########################################################
  const [quantity, setQuantity] = useState(1);
  // const productId = props.match.params.id;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // console.log(products);
  console.log(productList);

  //##########################################################
  // const addToCart = async () => {
  //   props.history.push(`/cart/${productId}?quantity=${quantity}`);
  // };
  //##########################################################

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  //##########################################################
  if (!products) {
    return (
      <div className="text-center mt-5 alert-warning p-5">
        <h4>NO PRODUCTS</h4>
      </div>
    );
  }
  //##########################################################
  if (loading) {
    return (
      <div className="text-center mt-5 alert-warning p-5">
        <h4>LOADING...</h4>
      </div>
    );
  }
  return (
    <div>
      <br />
      <div className="text-center container">
        <h1 className="text-info">
          <strong>PRODUCTS</strong>
        </h1>
      </div>
      <hr />

      <div>
        <div className="container-fluid p-5 bg-light">
          <div className="productcontent justify-content-center justify-content-evenly">
            {products.map((product) => (
              <div
                className="card"
                style={{ width: "200px" }}
                key={product._id}
              >
                <Link to={`/ProductsDetail/${product._id}`}>
                  <img
                    className="card-img-top w-100"
                    src={product.image}
                    style={{ width: "150px" }}
                    alt=" "
                  />
                </Link>

                <span className="card-body d-flex justify-content-evenly">
                  <a className="text-black" href="link">
                    {product.name}
                  </a>
                  <h6 className="text-info">
                    <strong>{product.price}</strong>
                  </h6>
                </span>
                <button
                  className="btn btn-dark btn-sm m-0 addtocart text-white"
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
                    className="bi bi-cart3"
                    viewBox="0 0 16 16 "
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84
                           4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z "
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default ProductList;
