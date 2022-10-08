import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoriesAction } from "../../redux/actions/categoryActions";
import styles from "./home.styles.css";
import Message from "../products/Message";
import Loading from "../products/Loading";
import NoCategories from "../categories/NoCategories";
// #####################################################################

function Home() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, allcategories } = categoryList;

  //##########################################################

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);

  //##########################################################

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block border-0 w-100 m-0 p-0"
              src="images/category-strip.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block border-0 w-100 m-0 p-0"
              src="images/HN5-45.webp"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block border-0 w-100 m-0 p-0"
              src="images/jewelry-store-profit.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
      {/* <!-- @*#############################################################################*@ --> */}
      <hr className="my-4" />
      <div className="container">
        <form className="mx-auto">
          <div
            className="d-flex justify-content-center"
            style={{ height: "45px" }}
          >
            <input
              className="pl-4 h-100 bg-light border-0 searchinput box-shadow"
              style={{ width: "700px" }}
              id=""
              name="search"
              placeholder="  What are you looking for... "
            />
            <a
              className="searchbtn p-3 box-shadow"
              href="{% url 'products:product_search'%}"
            >
              <strong>SEARCH</strong>
            </a>
          </div>
        </form>
      </div>
      <br />
      <div className="container beets padding" style={{ width: "400px" }}>
        <div className="row text-center m-3">
          <div className="col-12">
            <div className="text-dark">
              <h5 className="text-primary">
                <strong>EXPLORE POPULAR CATEGORIES</strong>
              </h5>
              <div className="col-6 mx-auto bg-info">
                <hr className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-1 mx-auto bg-danger">
        <div className="row d-flex flex-row " style={{ height: "50px" }}>
          <div className="text-center bg-light mx-auto w-100">
            <div className="d-flex d-md-flex mt-sm-3 pl-1 pr-1 m-1 w-100 justify-content-center">
              {loading ? (
                <Loading></Loading>
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                allcategories.map((category) => {
                  return (
                    <Link
                      className="d-flex text-primary mx-3"
                      to="#"
                      key={category._id}
                    >
                      <strong>{category.categoryName}</strong>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- @*#############################################################################*@ --> */}
      <br />
      <br />
      <div className="container-fluid">
        <div className="advertarea text-center justify-content-center">
          <div
            className="card box-shadow text-center justify-content-center m-2"
            id="trendingwears"
          >
            <div className="card-head">
              <div className="section-title">
                <h3 className="text-info">
                  <strong>TRENDING WEARS</strong>
                </h3>
                <hr className="bg-primary m-0" />
              </div>
            </div>
            <div className="card-body">
              <div className="card mx-auto" style={{ width: "180px" }}>
                <img
                  className="card-img-top"
                  src="images/Khakis-Chinos.jpg"
                  alt=""
                  height="120"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Fashion5</h5>
                  <p className="card-text text-center">
                    Check Unique Collections.
                  </p>
                  <a
                    href="/products"
                    className="btn btn-primary text-center justify-content-center"
                  >
                    FIND MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card box-shadow m-2" id="trendingwears">
            <div className="card-head">
              <div className="section-title">
                <h2 className="text-info">
                  <strong>FEMALE FASHION</strong>
                </h2>
              </div>
            </div>
            <hr className="btn-primary" />

            {/* <!-- ############################################################# --> */}
            <div className="">
              <div className="trendingwears justify-content-evenly">
                <div className="" style={{ width: "120px" }}>
                  <div className="text-center">
                    <img
                      src="images/HTB1VUtHcloHL1JjSZFwq6z6vpXab.jpg"
                      className="artwork"
                      height="120"
                      width="150"
                      alt=""
                    />
                    <hr className="btn-dark" />
                    <button
                      className="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>HAND BAGS</strong>
                    </button>
                    <hr className="btn-dark" />
                  </div>
                </div>
                <div className="" style={{ width: "120px" }}>
                  <div className="text-center">
                    <img
                      src="images/IMG_6853.jpg"
                      className="artwork"
                      height="120"
                      width="150"
                      alt=""
                    />
                    <hr className="btn-dark" />
                    <button
                      className="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>LIFESTYLE</strong>
                    </button>
                    <hr className="btn-dark" />
                  </div>
                </div>
                <div className="" style={{ width: "120px" }}>
                  <div className="text-center">
                    <img
                      src="images/ILANIS-israeli-diamond-jewelry.jpg"
                      className="artwork"
                      height="120 "
                      width="150"
                      alt=""
                    />
                    <hr className="btn-dark" />
                    <button
                      className="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>RINGS</strong>
                    </button>
                    <hr className="btn-dark" />
                  </div>
                </div>
                <div className="" style={{ width: "120px" }}>
                  <div className="text-center">
                    <img
                      src="images/18-04-19.jpg"
                      className="artwork"
                      height="120 "
                      width="150"
                      alt=""
                    />
                    <hr className="btn-dark" />
                    <button
                      className="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>JEWERELES</strong>
                    </button>
                    <hr className="btn-dark" />
                  </div>
                </div>
                <div className="" style={{ width: "120px" }}>
                  <div className="text-center">
                    <img
                      src="images/IMG_6841.jpg"
                      className="artwork"
                      height="120 "
                      width="150"
                      alt=""
                    />
                    <div className="mx-auto">
                      <hr className="btn-dark" />
                      <button
                        className="btn button btn-primary btn-sm shadow"
                        id="textshadow2 "
                      >
                        <strong>CAUSAL WEARS</strong>
                      </button>
                      <hr className="btn-dark" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* <!-- @*#######################################################################*@ --> */}
      <hr className="btn-primary" />

      <br />
      <br />
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12 my-auto mx-auto">
            <div className=" ">
              <h1
                className="font-weight-bold py-0 pl-4 textshadow2 pb-1 text-center bg-primary"
                id="TXT "
              >
                <strong>FIND WHATS HOT!!!</strong>
              </h1>
              <br />
              <div className="text-center">
                <h6 className="text-black" id="textshadow2 ">
                  <i>Get Glued with the latest trending Wears... </i>
                  <span>
                    <Link to="products" className="btn btn-primary">
                      <strong>EXPLORE WEARS</strong>
                    </Link>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr className="btn-primary" />

      {/* <!-- @*#############################################################################*@ --> */}
      <div className="container">
        <div className="col-6 mx-auto">
          <div className="text-center mx-auto">
            <h3 className="text-primary">
              <strong>FEATURED</strong>
            </h3>
            <div className="col-6 mx-auto bg-info">
              <hr className="w-50" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- @*#############################################################################*@ --> */}
      <div className="text-center">
        <h6 className="pinktext m-2">
          <i>Instant access to the most popular products...</i>
        </h6>
      </div>

      <hr className="btn-info" />
      
      <div className="container-fluid p-5 bg-light">
        <div className="productcontent justify-content-center justify-content-evenly">
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/IMG_6840.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-info text-white text-center">
                JEWERELES
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/1c3sveh71ipt.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-dark text-white text-center">BAGS</p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/11(5).jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-info text-white text-center">
                PRADA JACKET
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/11(4).jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-dark text-white text-center">KIDS</p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/istockphoto-650233226-170667a.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-info text-white text-center">
                ROLEX WATCHES
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/jeans-denim-pants-clothing.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-dark text-white text-center">JEANS</p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/Business-Casual-Dress-Code-Guide-for-Men-Business-Casual-Shoes.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-info text-white text-center">SHOES</p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/11(8).jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-dark text-white text-center">
                UNDERWEARS
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/11(9).jpg "
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-info text-white text-center">
                FACE CAPS
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/quince.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-dark text-white text-center">GOWNS</p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/weddings-2012-12-ball-gown-dress-main.webp "
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-info text-white text-center">
                WEDDING COLLECTIONS
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/tuxedo-jacket-1626717873.jpg "
              style={{ height: "150px" }}
              alt=" "
            />
            <div className="card-body">
              <p className="card-text bg-dark text-white text-center">
                OFFICE COLLECTION
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <!-- @*#############################################################################*@ --> */}
      <div className="container">
        <div className="col-6 mx-auto">
          <div className="text-center mx-auto">
            <h3 className="text-primary">
              <strong>SPECIAL OFFERS</strong>
            </h3>
            <div className="col-6 mx-auto bg-info">
              <hr className="w-50" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- @*#############################################################################*@ --> */}
      <div className="text-center">
        <h6 className="pinktext m-2">
          <i>
            Take a Glimpse at these fashion items ready for Purchase that will
            make you look Outstanding...
          </i>
        </h6>
      </div>
      <hr className="btn-info" />
      {/* <!-- @*#######################################################################*@ --> */}

      <div className="container-fluid p-5 bg-light">
        <div className="productcontent justify-content-center justify-content-evenly">
          <div className="card" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src="images/1c3sveh71ipt.jpg "
              style={{ height: "150px" }}
              alt=" "
            />
            <span className="card-body d-flex justify-content-center justify-content-evenly">
              <a className="text-black" href="{{item.get_absolute_url}}">
                Gucci Bags
              </a>
              <h6 className="text-info mt-1">
                <strong>$156.99</strong>
              </h6>
            </span>
            <a
              className="btn btn-dark btn-sm m-0 text-white"
              id="addtocart"
              value="{{item.id}}"
              href="link"
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
      </div>
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
// #####################################################################

export default Home;
// #####################################################################
