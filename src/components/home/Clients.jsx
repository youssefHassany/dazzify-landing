import React from "react";
import { event, groom, wedding } from "../../assets";

const Clients = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 playfair-display-font">
        What Clients Say
      </h1>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="card text-center"
            style={{
              background: "#B9D8A9",
              padding: "1rem",
              borderRadius: "2rem",
            }}
          >
            <img
              src={wedding}
              alt=""
              style={{
                maxWidth: "120px",
                display: "block",
                margin: "1rem auto",
              }}
            />
            <div className="card-title my-2">Jane Doe, Bride</div>
            <h3 className="card-text">“Daziffy made my wedding perfect!”</h3>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="card text-center"
            style={{
              background: "#B9D8A9",
              padding: "1rem",
              borderRadius: "2rem",
            }}
          >
            <img
              src={groom}
              alt=""
              style={{
                maxWidth: "120px",
                display: "block",
                margin: "1rem auto",
              }}
            />
            <div className="card-title my-2">John Smith, Groom</div>
            <h3 className="card-text">“Exceptional service and support.”</h3>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="card text-center"
            style={{
              background: "#B9D8A9",
              padding: "1rem",
              borderRadius: "2rem",
            }}
          >
            <img
              src={event}
              alt=""
              style={{
                maxWidth: "120px",
                display: "block",
                margin: "1rem auto",
              }}
            />

            <div className="card-title my-2">Emily Clark, Event Planner</div>
            <h3 className="card-text">“Highly recommend for any event.”</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
