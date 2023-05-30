import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import MostPopular from "./components/mostPopular/MostPopular";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Qwerty from "./components/brand-qwerty/Qwerty";
import Catalog from "./components/catalog/Catalog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mostpopular" element={<MostPopular />} />
          <Route exact path="/qwerty" element={<Qwerty />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
