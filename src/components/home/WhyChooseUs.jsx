import React from "react";
import { camera } from "../../assets";

const WhyChooseUs = () => {
  return (
    <div style={{ margin: "10rem 0" }} className="text-center">
      <h1 className="my-4 playfair-display-font">Why Choose Us</h1>

      <div className="container">
        <div className="row">
          <div
            className="card col-12 col-md-6 col-lg-4"
            style={{ border: "none" }}
          >
            <img
              src={camera}
              alt="camera Icon"
              width="32px"
              className="my-2 block  mx-auto"
            />
            <h4>Top Professionals</h4>
            <p>Only the best vendors for you.</p>
          </div>

          <div
            className="card col-12 col-md-6 col-lg-4"
            style={{ border: "none" }}
          >
            <img
              src={camera}
              alt="camera Icon"
              width="32px"
              className="my-2 block  mx-auto"
            />
            <h4>Seamless Experience</h4>
            <p>Easy and intuitive platform.</p>
          </div>

          <div
            className="card col-12 col-md-6 col-lg-4"
            style={{ border: "none" }}
          >
            <img
              src={camera}
              alt="camera Icon"
              width="32px"
              className="my-2 block  mx-auto"
            />
            <h4>Customer Support</h4>
            <p>We're here to help you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
