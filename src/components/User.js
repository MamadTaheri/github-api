import React from 'react';

const User = ({data}) => {

    return (
        <div className="col-md-3 m-md-3 m-3 shadow">
            <img className="img-fluid" src={data.avatar_url} alt={data.login} />
           <h5>{data.login}</h5>
        </div>
    );
};

export default User;