import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home/home";
import About from "./components/Pages/About/about";
import Pricing from "./components/Pages/Pricing/pricing";
// import { Link, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing/>} />
      </Routes>  
    </Router>
  );
};

export default App;
