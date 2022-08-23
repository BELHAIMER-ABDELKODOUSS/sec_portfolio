import React from "react";
import "./Styles/app.scss";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./Components/Nav";
import { Routes, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />}></Route>
          <Route path="/contact" exact element={<ContactUs />}></Route>
          <Route path="/ourwork" exact element={<OurWork />}></Route>
          <Route path="/ourwork/:id" exact element={<MovieDetail />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
