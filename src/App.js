import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Food from "./pages/Food";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Accessories from "./pages/Accessories/Accessories";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/store" exact element={<Store />} />
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/product" exact element={<Product/>}/>
          <Route path="/Accessories" exact element={<Accessories/>}/>
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/food" exact element={<Food />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
