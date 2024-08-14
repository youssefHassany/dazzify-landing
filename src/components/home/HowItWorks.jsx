import React from "react";
import { camera, chat, eventIcon, party } from "../../assets";

const HowItWorks = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <img
            src={party}
            alt=""
            style={{ maxWidth: "512px" }}
            className="col-lg-6"
          />

          <div className="col-lg-6 d-flex flex-column justify-content-evenly">
            <h1 className="playfair-display-font">How It Works</h1>
            <p>Simple steps to book vendors.</p>
            <button
              className="btn btn-primary"
              style={{
                padding: "1.5rem 2rem",
                display: "block",
                width: "fit-content",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="card col-12 col-md-6 col-lg-4"
            style={{ border: "none" }}
          >
            <img src={chat} alt="Chat Icon" width="32px" className="my-2" />
            <h4>Browse Vendors</h4>
            <p>Explore a wide range of services.</p>
          </div>

          <div
            className="card col-12 col-md-6 col-lg-4"
            style={{ border: "none" }}
          >
            <img src={camera} alt="camera Icon" width="32px" className="my-2" />
            <h4>Browse Vendors</h4>
            <p>Explore a wide range of services.</p>
          </div>

          <div
            className="card col-12 col-md-6 col-lg-4"
            style={{ border: "none" }}
          >
            <img
              src={eventIcon}
              alt="event Icon"
              width="32px"
              className="my-2"
            />
            <h4>Browse Vendors</h4>
            <p>Explore a wide range of services.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
