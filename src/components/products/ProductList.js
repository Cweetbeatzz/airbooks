import React, { useEffect, useState } from "react";
import Message from "./Message";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../../redux/actions/productsActions";
import { Link } from "react-router-dom";

function ProductList(props) {
  //##########################################################
  const [quantity, setQuantity] = useState(1);

  const productId = props.match.params.id;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;

  //##########################################################

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  // //##########################################################

  return (
    <div>
      <br />
      <div className="text-center container">
        <h1 className="text-info">
          <strong>PRODUCTS</strong>
        </h1>
      </div>
      <br />
      <div class="text-center">
        <Link class="btn btn-primary" to="/createproducts">
          <strong>CREATE PRODUCT</strong>
        </Link>
      </div>
      <hr />

      <div>
        <div className="container-fluid p-5 bg-light">
          <div className=" text-center">
            <table class="table table-striped w-100">
              <thead>
                <tr>
                  <th>PRODUCT IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>COMPANY</th>
                  <th>PRICE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <Loading></Loading>
                ) : error ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  product.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <Link to={`/ProductsDetails/${product._id}`}>
                          <img
                            src={product.productImage}
                            class="artwork"
                            height="70"
                            width="70"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td class="text-center py-5">{product.productName}</td>
                      <td class="text-center py-5">{product.company}</td>
                      <td class="text-center py-5">{product.price}</td>
                      <td class="text-center py-5">
                        <Link
                          to={`/UpdateProducts/${product._id}`}
                          class="btn btn-warning btn-sm"
                        >
                          Edit
                        </Link>
                        {"  "}|{"  "}
                        <Link
                          to={`/ProductsDetails/${product._id}`}
                          class="btn btn-primary btn-sm"
                        >
                          Details
                        </Link>{" "}
                        |{"  "}
                        <Link
                          to={`/DeleteProduct/${product._id}`}
                          class="btn btn-danger btn-sm"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default ProductList;

{
  /* <div class="container-fluid">
  <div class="text-center container"></div>
</div>; */
}
