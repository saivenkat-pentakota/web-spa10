import React from "react";
import "./HomePage.css";
import homepageImage from "../images/hero.jpg";
import Customizable from "./Customizable";
import ManageBusiness from "./ManageBusiness";
import AppIntegration from "./AppIntegration";
import AdvancedFeatures from "./AdvancedFeatures";

function HomePage() {
  return (
    <>
      <div className="position-relative p-0" id="home">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="m-0" >soFFer</h1>
          </a>
          <button
            className="navbar-toggler rounded-pill"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <a href="#home" className="nav-item nav-link ">
                Home
              </a>
              <a href="#about" className="nav-item nav-link">
                About
              </a>
              <a href="#overview" className="nav-item nav-link">
                Overview
              </a>
              <a href="#features" className="nav-item nav-link">
                Features
              </a>
              <a href="#pricing" className="nav-item nav-link">
                Pricing
              </a>
              <a href="#testimonial" className="nav-item nav-link">
                Testimonial
              </a>
              <a href="#contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a
              href
              className="btn btn-light rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
            >
              Free Trail
            </a>
          </div>
        </nav>
        <div className="hero-header" style={{backgroundColor:"#4AC4F3"}}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="text-white mb-4 animated slideInDown">
                  Awesome Software To Manage Your Business
                </h1>
                <p className="text-white pb-3 animated slideInDown">
                  Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                  stet dolor sed justo kasd dolor sed magna dolor.
                </p>
                <div className="position-relative w-100 mt-3">
                  <input
                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                    style={{ height: "58px" }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-3 shadow-none position-absolute top-0 end-0 m-2"
                  >
                    Free Trail
                  </button>
                </div>
              </div>
              <div className="col-lg-6 text-center text-lg-start">
                <img
                  className="img-fluid rounded animated zoomIn"
                  src={homepageImage}
                  alt="homepageimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Customizable/>
      <ManageBusiness/>
      <AppIntegration/>
      <AdvancedFeatures/>
    </>
  );
}

export default HomePage;
