import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {

  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const url = "https://api.github.com/search/users?q=";

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const searchHandler = () => {
    console.log(url + text);
    axios.get(url + text)
    .then(response => {
      setData(response.data);
    })
    .catch(error => console.log(error));
  }


  return (

    <div className="container-fluid p-md-5">
      <div className="row mx-md-5 justify-content-center">
        <div className="col-md-3 ">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Github UserName</label>
            <input value={text} onChange={changeHandler} type="text" className="form-control"  placeholder="Enter github username ..."  />
          </div>

          <button className="btn btn-primary btn-block" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
