import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import MostPopular from './components/mostPopular/MostPopular'
import Reviews from './components/reviews/Reviews'
import Contact from './components/contact/Contact'
import Qwerty from './components/brand-qwerty/Qwerty'
import './app.css'


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Home/>
  <MostPopular/>
  <Qwerty/>
  <Reviews/>
  <Contact/>
  <Routes>
  </Routes>
  
  </BrowserRouter>
  </>;
}

export default App;
