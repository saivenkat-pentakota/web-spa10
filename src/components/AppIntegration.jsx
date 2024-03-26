import React from "react";
import "./AppIntegration.css";
import overviewImage1 from "../images/overview-1.jpg";
import overviewImage2 from "../images/overview-2.jpg";
import overviewImage3 from "../images/overview-3.jpg";

function AppIntegration() {
  return (
    <>
      <div className="bg-light my-6 py-5" id="overview">
        <div className="container">
          <div className="row g-5 py-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded"
                src={overviewImage1}
                alt="overviewImg"
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <h1 className="mb-0">01</h1>
                <span
                  className="bg-primary mx-2"
                  style={{ width: "30px", height: "2px" }}
                ></span>
                <h5 className="mb-0">App Integration</h5>
              </div>
              <p className="mb-4">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit clita duo justo eirmod magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>Fully
                customizable
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>User
                friendly interface
              </p>
              <p className="mb-0">
                <i className="fa fa-check-circle text-primary me-3"></i>More
                effective & poerwfull
              </p>
            </div>
          </div>
          <div className="row g-5 py-5 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <h1 className="mb-0">02</h1>
                <span
                  className="bg-primary mx-2"
                  style={{ width: "30px", height: "2px" }}
                ></span>
                <h5 className="mb-0">App Customization</h5>
              </div>
              <p className="mb-4">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit clita duo justo eirmod magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>Fully
                customizable
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>User
                friendly interface
              </p>
              <p className="mb-0">
                <i className="fa fa-check-circle text-primary me-3"></i>More
                effective & poerwfull
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid rounded"
                src={overviewImage2}
                alt="overviewImg"
              />
            </div>
          </div>
          <div className="row g-5 py-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded"
                src={overviewImage3}
                alt="overviewImg"
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <h1 className="mb-0">03</h1>
                <span
                  className="bg-primary mx-2"
                  style={{width: "30px", height: "2px"}}
                ></span>
                <h5 className="mb-0">App Modification</h5>
              </div>
              <p className="mb-4">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit clita duo justo eirmod magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>Fully
                customizable
              </p>
              <p>
                <i className="fa fa-check-circle text-primary me-3"></i>User
                friendly interface
              </p>
              <p className="mb-0">
                <i className="fa fa-check-circle text-primary me-3"></i>More
                effective & poerwfull
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppIntegration;
