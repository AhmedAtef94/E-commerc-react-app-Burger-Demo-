import React from "react";
import { Link, NavLink } from "react-router-dom";

const Hader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink id="headr" className="navbar-brand" to="/">
            Burger
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Menu
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hader;
