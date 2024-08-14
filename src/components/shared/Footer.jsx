import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer--> */}
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">Copyright &copy; Dazzify 2024</div>
            </div>
            <div className="col-auto">
              <a className="small" href="#!">
                Privacy
              </a>
              <span className="mx-1">&middot;</span>
              <Link className="small" to="/terms">
                Terms & Conditions
              </Link>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
