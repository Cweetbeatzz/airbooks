import React from "react";

function Search() {
  // const searchProduct = () => useQuery("todos", fetchFunction);
  return (
    <div>
      <div className="container">
        <form className="mx-auto">
          <div
            className="d-flex justify-content-center"
            style={{ height: "45px" }}
          >
            <input
              className="h-100 bg-light border-0 searchinput box-shadow p-lg-3"
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
    </div>
  );
}

export default Search;
