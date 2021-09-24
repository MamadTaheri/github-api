import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";

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

    <div className="container p-md-5">
      <div className="row mx-md-5 justify-content-center">
        <div className="col-md-5 ">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Github UserName</label>
            <input value={text} onChange={changeHandler} type="text" className="form-control"  placeholder="Enter github username ..."  />
          </div>

          <button className="btn btn-primary btn-block" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>

      <div className="row">
         { data.total_count >= 0 && 
          <>
           <div className="col-md-12 pt-4">
             <span className="badge-primary px-4 py-2 rounded-pill"> Total found users : {data.total_count}</span>
           </div>  
           <div className="col-md-12 pt-4">
             {data.items.map(user => <User data={user} key={user.id} />)}
           </div>  
          </> 
         }
      </div>
    </div>
  );
};

export default Home;
