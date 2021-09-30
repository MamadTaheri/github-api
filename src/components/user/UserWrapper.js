import React from 'react';
import UserCard from './UserCard'

const UserWrapper = ({users}) => {
    return (
        users.items.map(user => <UserCard data={user} key={user.id} />)
    );
};

export default UserWrapper;