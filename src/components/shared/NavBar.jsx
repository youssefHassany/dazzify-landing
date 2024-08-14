import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
  };

  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 align-items-center">
        <div className="container px-5">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" style={{ maxWidth: "100px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/terms">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("change-language")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleChangeLanguage("en")}
                      >
                        {t("english")}
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => handleChangeLanguage("ar")}
                      >
                        {t("arabic")}
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
