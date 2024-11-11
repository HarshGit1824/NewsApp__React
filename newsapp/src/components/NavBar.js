import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  // Toggle dark mode
  handleDarkModeToggle = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle("dark-mode");
  };

  render() {
    const { darkMode } = this.state;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg ${
            darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
          }`}
        >
          <img
            src="data:image/png;base64,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"
            alt="newsBite logo"
            width="40"
            height="40"
          />

          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsBite
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeToggle"
                  checked={darkMode}
                  onChange={this.handleDarkModeToggle}
                />
                <label
                  className={`form-check-label ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  htmlFor="darkModeToggle"
                >
                  {darkMode ? "Light Mode🌞" : "Dark Mode🌙"}
                </label>
              </div>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
