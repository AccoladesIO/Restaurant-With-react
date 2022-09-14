import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Hero from "./components/Hero/hero";
import Main from "./components/Main/main";
import { GlobalStyle } from "./globalStyle";
// import { Link, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Hero></Hero>
      <Main></Main>
    </Router>
  );
};

export default App;
