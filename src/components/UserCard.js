import React from 'react';
import { Link } from 'react-router-dom';

const User = ({data}) => {

    return (
        <div className="col-md-3 m-md-3 m-1 p-1 shadow">
            <img className="img-fluid" src={data.avatar_url} alt={data.login} />
           <h5>{data.login}</h5>
           <Link to=""></Link>
        </div>
    );
};

export default User;