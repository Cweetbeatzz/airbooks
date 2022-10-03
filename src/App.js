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
import AccountUpdate from "./components/account/AccountUpdate";
import AccountDetails from "./components/account/AccountDetails";
import AccountDelete from "./components/account/AccountDelete";
import Roles from "./components/account/Roles";
import Analytics from "./components/extras/Analytics";
import Mail from "./components/extras/Mail";
import Manage from "./components/extras/Manage";
import Notifications from "./components/extras/Notifications";
import Reports from "./components/extras/Reports";
import Sales from "./components/extras/Sales";
import Transactions from "./components/extras/Transactions";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteCategory from "./components/categories/DeleteCategory";
import CustomerCare from "./components/CustomerCare/CustomerCare";

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
          <Route path="/ProductsDetails/:id" element={<ProductDetails />} />
          <Route path="/CreateProducts" element={<CreateProducts />} />
          <Route path="/UpdateProducts/:id" element={<UpdateProducts />} />
          <Route path="/DeleteProduct/:id" element={<DeleteProduct />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/CreateCategory" element={<CreateCategory />} />
          <Route path="/UpdateCategory/:id" element={<UpdateCategory />} />
          <Route path="/DeleteCategory/:id" element={<DeleteCategory />} />
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
          <Route path="/AccountUpdate/:id" element={<AccountUpdate />} />
          <Route path="/AccountDetails/:id" element={<AccountDetails />} />
          <Route path="/AccountDelete/:id" element={<AccountDelete />} />
          <Route path="/Roles" element={<Roles />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Mail" element={<Mail />} />
          <Route path="/Manage" element={<Manage />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/customer-care" element={<CustomerCare />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
