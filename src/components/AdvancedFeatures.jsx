import React from "react";
import "./AdvancedFeatures.css";

function AdvancedFeatures() {
  return (
    <>
      <div className="py-6" id="features">
        <div className="container">
          <div
            className="mx-auto text-center "
            style={{maxWidth: "600px"}}
          >
            <h1 className="mb-3">Advanced Features</h1>
            <p className="mb-5">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
              labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
              sit clita duo justo
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6"
            >
              <div className="advanced-feature-item text-center rounded py-5 px-4">
                <i className="fa fa-edit fa-3x text-primary mb-4"></i>
                <h5 className="mb-3">Fully Customizable</h5>
                <p className="m-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
            >
              <div className="advanced-feature-item text-center rounded py-5 px-4">
                <i className="fa fa-sync fa-3x text-primary mb-4"></i>
                <h5 className="mb-3">App Integration</h5>
                <p className="m-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
            >
              <div className="advanced-feature-item text-center rounded py-5 px-4">
                <i className="fa fa-laptop fa-3x text-primary mb-4"></i>
                <h5 className="mb-3">High Resolution</h5>
                <p className="m-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
            >
              <div className="advanced-feature-item text-center rounded py-5 px-4">
                <i className="fa fa-draw-polygon fa-3x text-primary mb-4"></i>
                <h5 className="mb-3">Drag And Drop</h5>
                <p className="m-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedFeatures;
