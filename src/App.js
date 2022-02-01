import "./App.css";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
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
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
