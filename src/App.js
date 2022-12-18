import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Food from "./pages/Food";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/store" exact element={<Store />} />
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
