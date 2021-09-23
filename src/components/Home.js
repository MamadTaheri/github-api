import React from "react";

const Home = () => {
  return (
    <div className="container-fluid p-md-5">
      <div className="row mx-md-5">
        <div className="col-md-12 ">
          <div className="form-group">
            <label for="exampleInputEmail1">Github UserName</label>
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
