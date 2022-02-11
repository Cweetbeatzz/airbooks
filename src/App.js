import "./App.css";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import ProductStore from "./components/products/ProductStore";
import ProductDetails from "./components/products/ProductDetails";
import CreateProducts from "./components/products/CreateProducts";
import UpdateProducts from "./components/products/UpdateProducts";
import DeleteProduct from "./components/products/DeleteProduct";
import Categories from "./components/categories/Categories";
import CreateCategory from "./components/categories/CreateCategory";
import UpdateCategory from "./components/categories/UpdateCategory";
import Cart from "./components/cart/Cart";
import ProdCategories from "./components/prodByCategories/ProdByCategories";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Privacy from "./components/privacy/Privacy";
import Admin from "./components/admin/Admin";
import Account from "./components/account/Account";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteCategory from "./components/categories/DeleteCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductStore" element={<ProductStore />} />
          <Route
            path="/ProductsDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/CreateProducts" element={<CreateProducts />} />
          <Route path="/UpdateProducts" element={<UpdateProducts />} />
          <Route path="/DeleteProduct" element={<DeleteProduct />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/CreateCategory" element={<CreateCategory />} />
          <Route path="/UpdateCategory" element={<UpdateCategory />} />
          <Route path="/DeleteCategory" element={<DeleteCategory />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProdCategories" element={<ProdCategories />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Account" element={<Account />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
