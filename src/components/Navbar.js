import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <span className="h5">MOHAMMAD TAGERI </span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
