import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import logo from "../assets/images/MtGithubFinderLogo.png";
import "./Navbar.css";

const Navbar = () => {
    
  return (
    <div className="custom-navbar">
      <div className="leftSide">
        <img src={logo} />
        <FaIcons.FaBars  />
      </div>
      <div className="rightSide">
        <div className="links">
          <Link to="/"> خانه </Link>
          <Link to="/about">درباره ما</Link>
          <Link to="/contact">تماس با ما</Link>
        </div>
      </div>
      {/* 
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="h5 text-primary">
                <img src={logo} width={200}/>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">خانه</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">درباره ما</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">تماس با ما</Link>
                    </li>
                </ul>
            </div>
        </nav> 
        */}
    </div>
  );
};

export default Navbar;
