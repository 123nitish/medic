import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-1">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/">
                  Set Reminder
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/">
                  Diet
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/">
                  Fitness
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/">
                  Price Comparison
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/">
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
