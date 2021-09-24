import React, { useState } from "react";

const Home = () => {

  const {users, setUsers} = useState([]);

  return (

    <div className="container-fluid p-md-5">
      <div className="row mx-md-5 justify-content-center">
        <div className="col-md-3 ">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Github UserName</label>
            <input  type="text" className="form-control"  placeholder="Enter github username ..."  />
          </div>

          <button className="btn btn-primary btn-block">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
