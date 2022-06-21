import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import spinner from "../assets/spinner.gif";

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
              <Link className="btn btn-dark" to="/">Back to Search</Link>
              <span>Hierable</span>
           </div>
        </div>
      <div className="row justify-content-center border rounded">
        <div className="col-md-6 text-center">
          <img
            className="img-fluid img-rounded py-2"
            src={user.avatar_url}
            alt={user.login}
          />
          <h5 className="p-2">{user.login}</h5>
          <h5 className="p-2">{user.location}</h5>
        </div>
        <div className="col-md-6">
          <h6 className="py-3">{user.bio}</h6>
          <a
            className="btn btn-dark"
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noreferrer"
          >
            VISIT GITHUB
          </a>
          <p className="py-2">Login : {user.login}</p>
          <p>
            website :{" "}
            <a href={user.blog} target="_blank" rel="noreferrer"> 
              {user.blog}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
