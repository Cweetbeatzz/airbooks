import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { productListByategoryAction } from "../../redux/actions/productsActions";

function ProdByCategories() {
  //#######################################################################################
  const dispatch = useDispatch();
  const { categoryId } = useParams([]);

  const [productsByCategory, setproductsByCategory] = useState([]);

  const getProd = useSelector((state) => state.ProductListByCategoryReducer);
  const { loading, error, products } = getProd;
  //#######################################################################################

  const getProdByCat = () => {
    setproductsByCategory(products);
  };

  //#######################################################################################

  useEffect(() => {
    dispatch(productListByategoryAction(categoryId));
  }, [dispatch]);

  //#######################################################################################

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return "An Error occured Fetching Products...";
  }

  //#######################################################################################
  return (
    <div>
      <br />
      <div className="text-center container">
        <h1 className="text-info">
          <strong>PRODUCT CATEGORY</strong>
        </h1>
      </div>

      <hr />
      <div className="row card text-center m-3">
        <div className="container-fluid p-5 bg-light">
          <div className="productcontent justify-content-center justify-content-evenly">
            <div>
              <h4>NO CONTENT</h4>
            </div>
            <div className="card" style={{ width: "200px" }}>
              <img
                className="card-img-top"
                src="{{ item.image.url }} "
                style={{ width: "150px" }}
                alt=" "
              />
              <span className="card-body d-flex d-inline-flex mx-auto my-auto justify-content-evenly">
                <a className="text-black" href="link">
                  Name
                </a>
                <h6 className="text-info">
                  <strong>Price</strong>
                </h6>
              </span>
              <a className="btn btn-dark btn-sm m-0" href="link">
                BUY
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
      </div>
      <hr />
    </div>
  );
}

export default ProdByCategories;
