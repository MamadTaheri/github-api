import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="custom-navbar persian-font">
      <div className="leftSide">
        <h3>M.Taheri</h3>
        <FaIcons.FaBars onClick={() => setShow(!show)} />
      </div>
      <div className={show ? "rightSide active" : "rightSide"}>
        <ul>
          {linksData.map((item) => (
            <li key={item.id}>
              <Link to={item.path} onClick={() => setShow(false)}>
                {item.icon}
                {item.title}
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

const linksData = [
  { id: 1, path: "/", title: "خانه", icon: <FaIcons.FaHome /> },
  { id: 2, path: "/about", title: "درباره ما", icon: <FaIcons.FaInfo /> },
  { id: 3, path: "/contact", title: "تماس با ما", icon: <FaIcons.FaPhone /> },
];
