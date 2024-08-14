import React from "react";

const Hero = () => {
  return (
    <>
      {/* <!-- Header--> */}
      <header className="py-5 hero">
        <div className="bg"></div>

        <div className="container px-5 pb-5" style={{ zIndex: "20" }}>
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* <!-- Header text content--> */}
              <div className="text-center text-xxl-start">
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Elevate Your Event
                  </span>
                </h1>
                <div className="fs-3">
                  Find top vendors for your special day.
                </div>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    style={{ cursor: "pointer" }}
                    href="resume.html"
                  >
                    Get Started
                  </a>
                  <a
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    href="projects.html"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
