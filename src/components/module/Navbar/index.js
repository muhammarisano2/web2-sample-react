import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
const {user} = useSelector((state)=>state.user)
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                prodcut
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo">
                todo
              </NavLink>
            </li>
            <li><span>{user.fullname}</span></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
