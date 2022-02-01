import React from "react";

function cart() {
  return (
    <div>
      <br />
      <div class="text-center">
        <h1 class="text-info">
          <strong>CART</strong>
        </h1>
      </div>
      <hr />
      <div class="text-center container card box-shadow">
        <table class="table justify-content-center text-center">
          <thead class="mt-3 pt-3 p-3">
            <tr>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>ACTIONS</th>
              <th>PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>Quantity</td>
              <td>
                <a id="AddToCart" class="btn btn-primary btn-sm" href="link">
                  +
                </a>
                <a
                  id="DecreaseFromCart"
                  class="btn btn-warning btn-sm"
                  href="link"
                >
                  -
                </a>
                <a
                  id="DeleteFromCart"
                  class="btn btn-danger btn-sm"
                  href="link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1
                                      .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1
                                      1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0
                                      1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </a>
              </td>
              <td>price</td>
              <td>$0</td>
            </tr>
          </tbody>

          <tr class="">
            <td class="text-center mx-auto" colspan="5">
              <h6 class="text-danger span">
                <strong>GRAND TOTAL:</strong>
              </h6>
              $0
            </td>
          </tr>
          <tr>
            <td class="text-right" colspan="5">
              <a class="btn btn-warning" href="link">
                CLEAR CART
              </a>
              <a class="btn btn-primary" href="link">
                CHECKOUT
              </a>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div class="text-center">
        <h1 class="text-info">
          <strong>EMPTY CART</strong>
        </h1>
      </div>
    </div>
  );
}

export default cart;
