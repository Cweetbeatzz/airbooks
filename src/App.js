import "./App.css";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Products from "./components/products/ProductList";
import ProductDetail from "./components/productDetails/ProductDetails";
import CreateProducts from "./components/products/Create";
import UpdateProducts from "./components/products/Update";
import DeleteProducts from "./components/products/Delete";
import Categories from "./components/categories/Categories";
import CreateCategories from "./components/categories/Create";
import UpdateCategories from "./components/categories/Update";
import DeleteCategories from "./components/categories/Delete";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="ProductsDetail/:id" element={<ProductDetail />} />
          <Route path="CreateProducts" element={<CreateProducts />} />
          <Route path="UpdateProducts" element={<UpdateProducts />} />
          <Route path="DeleteProducts" element={<DeleteProducts />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="CreateCategories" element={<CreateCategories />} />
          <Route path="UpdateCategories" element={<UpdateCategories />} />
          <Route path="DeleteCategories" element={<DeleteCategories />} />
          <Route path="DeleteCategories" element={<DeleteCategories />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="ProdCategories" element={<ProdCategories />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Account" element={<Account />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
