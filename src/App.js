/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Home Pages Import
import Home from "./pages/index";
import About from "./pages/about-us";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Services from "./pages/services";
import ServiceDetails from "./pages/serviceDetails";
import ProjectDetails from "./pages/projectDetails";
import Contact from "./pages/contact-us";

import "./assets/scss/app.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/portfolio"} element={<Portfolio />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/services"} element={<Services />} />
          {/* <Route path={"/services/:slug"} element={<ServiceDetails />} /> */}
          <Route
            path={process.env.PUBLIC_URL + "/project-details/:slug"}
            element={<ProjectDetails />}
          />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
