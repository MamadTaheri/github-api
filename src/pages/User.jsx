import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import spinner from "../assets/images/spinner.gif";
import * as FaIcons from "react-icons/fa";
import "./styles/User.css";

const User = () => {
  const { login } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const url = "https://api.github.com/users/";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url + login)
      .then((response) => {
        setLoading(false);
        setUser(response.data);
        console.log("ok");
      })
      .catch((error) => console.log(error));
  }, []);

  return loading ? (
    <div className="container p-md-5">
      <div className="row">
        <div className="col-md-12 pt-4 text-center">
          <img src={spinner} alt="spinner" />
        </div>
      </div>
    </div>
  ) : (
    <div className="container p-md-5">
      <div className="row">
        <div className="col-md-12 p-1">
          <Link className="btn btn-outline-dark" to="/">
            <FaIcons.FaArrowAltCircleLeft />
            <span className="ml-2">Back to Search</span>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center border rounded shadow-lg">
        <div className="col-md-6 text-center">
          <div className="avatar-custom-container">
            <img className="img-fluid" src={user.avatar_url} alt={user.login} />
            <span className="badge badge-primary p-3">Hirable ✔</span>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="py-2">Bio:</h5>
          <h5 className="py-2">{user.bio}</h5>
          <h5 className="py-2">Login: {user.login}</h5>
          <h5 className="py-2">
            website :
            {user.blog ? (
              <a
                href={user.blog}
                target="_blank"
                rel="noreferrer"
                className="ml-2"
              >
                {user.blog}
              </a>
            ) : (
              <span className="text-danger ml-2 p-2">Website Not Found</span>
            )}
          </h5>
          <h5 className="py-2">Location: {user.location}</h5>
          <a
            className="btn btn-success py-2"
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noreferrer"
          >
            VISIT GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
