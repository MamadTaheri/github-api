import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import logo from "../assets/images/MtGithubFinderLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="custom-navbar persian-font">
      <div className="leftSide">
        <img src={logo} />
        <FaIcons.FaBars onClick={() => setShow(!show)} />
      </div>
      <div className={show ? "rightSide active" : "rightSide"}>
        <ul>
          {linksData.map((item) => (
            <li key={item.id}>
              <Link to={item.path} onClick={() => setShow(false)}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

const linksData = [
  { id: 1, path: "/", title: "خانه" },
  { id: 2, path: "/about", title: "درباره ما" },
  { id: 3, path: "/contact", title: "تماس با ما" },
];
