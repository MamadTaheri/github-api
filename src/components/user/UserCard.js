import React from 'react';
import { Link } from 'react-router-dom';

const User = ({data}) => {

    return (
        <div className="col-md-3 m-md-3 m-1 p-1 shadow text-center">
            <img className="img-fluid" src={data.avatar_url} alt={data.login} />
           <h5>{data.login}</h5>
           <Link to={`/user/${data.login}`} className="btn btn-block btn-primary">More</Link>
        </div>
    );
};

export default User;