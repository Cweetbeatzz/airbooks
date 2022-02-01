import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./home.styles";
import styles from "./home.styles.css";
// #####################################################################

function Home() {
  return (
    <Container>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block border-0 w-100 m-0 p-0"
              src="images/category-strip.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block border-0 w-100 m-0 p-0"
              src="images/HN5-45.webp"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block border-0 w-100 m-0 p-0"
              src="images/jewelry-store-profit.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
      {/* <!-- @*#############################################################################*@ --> */}
      <hr class="my-4" />
      <div class="container">
        <form class="mx-auto">
          <div class="d-flex justify-content-center" style={{ height: "45px" }}>
            <input
              class="pl-4 h-100 bg-light border-0 searchinput box-shadow"
              style={{ width: "700px" }}
              id=""
              name="search"
              placeholder="  What are you looking for... "
            />
            <a
              class="searchbtn p-3 box-shadow"
              href="{% url 'products:product_search'%}"
            >
              <strong>SEARCH</strong>
            </a>
          </div>
        </form>
      </div>
      <br />
      <div class="container beets padding" style={{ width: "400px" }}>
        <div class="row text-center m-3">
          <div class="col-12">
            <div class="text-dark">
              <h5 class="text-primary">
                <strong>EXPLORE POPULAR CATEGORIES</strong>
              </h5>
              <div class="col-6 mx-auto bg-info">
                <hr class="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container m-1 mx-auto">
        <div class="row d-flex flex-row catlist" style={{ width: "50px" }}>
          <div class="text-center bg-light mx-auto w-100">
            <div class="d-inline-block navbar-expand-sm mt-sm-3 pl-1 pr-1 m-1">
              <a
                class="d-flex flex-row text-primary"
                href="{{item.categories_absolute_url}}"
              >
                <strong>name</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- @*#############################################################################*@ --> */}
      <div>
        <hr class="my-4" />
      </div>
      <div class="container-fluid">
        <div class="advertarea text-center justify-content-center">
          <div
            class="card box-shadow text-center justify-content-center m-2"
            id="trendingwears"
          >
            <div class="card-head">
              <div class="section-title">
                <h3 class="text-info">
                  <strong>TRENDING WEARS</strong>
                </h3>
                <hr class="bg-primary m-0" />
              </div>
            </div>
            <div class="card-body">
              <div class="card mx-auto" style={{ width: "180px" }}>
                <img
                  class="card-img-top"
                  src="images/Khakis-Chinos.jpg"
                  alt=""
                  height="120"
                />
                <div class="card-body">
                  <h5 class="card-title text-center">Fashion5</h5>
                  <p class="card-text text-center">Check Unique Collections.</p>
                  <a
                    href="/products"
                    class="btn btn-primary text-center justify-content-center"
                  >
                    FIND MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card box-shadow m-2" id="trendingwears">
            <div class="card-head">
              <div class="section-title">
                <h2 class="text-info">
                  <strong>FEMALE FASHION</strong>
                </h2>
              </div>
            </div>
            <hr class="btn-primary" />

            {/* <!-- ############################################################# --> */}
            <div class="">
              <div class="trendingwears justify-content-evenly">
                <div class="" style={{ width: "120px" }}>
                  <div class="text-center">
                    <img
                      src="images/HTB1VUtHcloHL1JjSZFwq6z6vpXab.jpg"
                      class="artwork"
                      height="120"
                      width="150"
                      alt=""
                    />
                    <hr class="btn-dark" />
                    <button
                      class="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>HAND BAGS</strong>
                    </button>
                    <hr class="btn-dark" />
                  </div>
                </div>
                <div class="" style={{ width: "120px" }}>
                  <div class="text-center">
                    <img
                      src="images/IMG_6853.jpg"
                      class="artwork"
                      height="120"
                      width="150"
                      alt=""
                    />
                    <hr class="btn-dark" />
                    <button
                      class="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>LIFESTYLE</strong>
                    </button>
                    <hr class="btn-dark" />
                  </div>
                </div>
                <div class="" style={{ width: "120px" }}>
                  <div class="text-center">
                    <img
                      src="images/ILANIS-israeli-diamond-jewelry.jpg"
                      class="artwork"
                      height="120 "
                      width="150"
                      alt=""
                    />
                    <hr class="btn-dark" />
                    <button
                      class="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>RINGS</strong>
                    </button>
                    <hr class="btn-dark" />
                  </div>
                </div>
                <div class="" style={{ width: "120px" }}>
                  <div class="text-center">
                    <img
                      src="images/18-04-19.jpg"
                      class="artwork"
                      height="120 "
                      width="150"
                      alt=""
                    />
                    <hr class="btn-dark" />
                    <button
                      class="btn button btn-primary btn-sm shadow"
                      id="textshadow2 "
                    >
                      <strong>JEWERELES</strong>
                    </button>
                    <hr class="btn-dark" />
                  </div>
                </div>
                <div class="" style={{ width: "120px" }}>
                  <div class="text-center">
                    <img
                      src="images/IMG_6841.jpg"
                      class="artwork"
                      height="120 "
                      width="150"
                      alt=""
                    />
                    <div class="mx-auto">
                      <hr class="btn-dark" />
                      <button
                        class="btn button btn-primary btn-sm shadow"
                        id="textshadow2 "
                      >
                        <strong>CAUSAL WEARS</strong>
                      </button>
                      <hr class="btn-dark" />
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
      <hr class="btn-primary" />

      <br />
      <br />
      <div class="container">
        <div class="row mx-auto">
          <div class="col-12 my-auto mx-auto">
            <div class=" ">
              <h1
                class="font-weight-bold py-0 pl-4 textshadow2 pb-1 text-center bg-primary"
                id="TXT "
              >
                <strong>FIND WHATS HOT!!!</strong>
              </h1>
              <br />
              <div class="text-center">
                <h6 class="text-black" id="textshadow2 ">
                  <i>Get Glued with the latest trending Wears... </i>
                  <span>
                    <Link to="products" class="btn btn-primary">
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
      <hr class="btn-primary" />

      {/* <!-- @*#############################################################################*@ --> */}
      <div class="container">
        <div class="col-6 mx-auto">
          <div class="text-center mx-auto">
            <h3 class="text-primary">
              <strong>FEATURED</strong>
            </h3>
            <div class="col-6 mx-auto bg-info">
              <hr class="w-50" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- @*#############################################################################*@ --> */}
      <div class="text-center">
        <h6 class="pinktext m-2">
          <i>Instant access to the most popular products...</i>
        </h6>
      </div>
      <hr class="btn-info" />
      <div class="container-fluid p-5 bg-light">
        <div class="productcontent justify-content-center justify-content-evenly">
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/IMG_6840.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-info text-white text-center">
                CLASSIC JEWERELES
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/1c3sveh71ipt.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-dark text-white text-center">BAGS</p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/11 (5).jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-info text-white text-center">
                PRADA JACKET
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/11 (4).jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-dark text-white text-center">KIDS</p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/istockphoto-650233226-170667a.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-info text-white text-center">
                ROLEX WATCHES
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/jeans-denim-pants-clothing.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-dark text-white text-center">JEANS</p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/Business-Casual-Dress-Code-Guide-for-Men-Business-Casual-Shoes.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-info text-white text-center">SHOES</p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/11 (8).jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-dark text-white text-center">UNDERWEARS</p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/11 (9).jpg "
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-info text-white text-center">FACE CAPS</p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/quince.jpg"
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-dark text-white text-center">GOWNS</p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/weddings-2012-12-ball-gown-dress-main.webp "
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-info text-white text-center">
                WEDDING COLLECTIONS
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="images/tuxedo-jacket-1626717873.jpg "
              style={{ height: "150px" }}
              alt=" "
            />
            <div class="card-body">
              <p class="card-text bg-dark text-white text-center">
                OFFICE COLLECTION
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <!-- @*#############################################################################*@ --> */}
      <div class="container">
        <div class="col-6 mx-auto">
          <div class="text-center mx-auto">
            <h3 class="text-primary">
              <strong>COLLECTIONS</strong>
            </h3>
            <div class="col-6 mx-auto bg-info">
              <hr class="w-50" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- @*#############################################################################*@ --> */}
      <div class="text-center">
        <h6 class="pinktext m-2">
          <i>
            Take a Glimpse at these fashion items ready for Purchase that will
            make you look Outstanding...
          </i>
        </h6>
      </div>
      <hr class="btn-info" />
      {/* <!-- @*#######################################################################*@ --> */}

      <div class="container-fluid p-5 bg-light">
        <div class="productcontent justify-content-center justify-content-evenly">
          <div class="card" style={{ width: "200px" }}>
            <img
              class="card-img-top"
              src="{{ item.image.url }} "
              style={{ height: "150px" }}
              alt=" "
            />
            <span class="card-body d-flex justify-content-center justify-content-evenly">
              <a class="text-black" href="{{item.get_absolute_url}}">
                name
              </a>
              <h6 class="text-info mt-1">
                <strong>price</strong>
              </h6>
            </span>
            <a
              class="btn btn-dark btn-sm m-0 text-white"
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
                class="bi bi-cart3"
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
    </Container>
  );
}
// #####################################################################

export default Home;
// #####################################################################
