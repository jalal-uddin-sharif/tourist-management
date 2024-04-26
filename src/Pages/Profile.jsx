import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>{user?.email}</h1>
            <h1>{user?.displayName}</h1>
        </div>
    );
};

export default Profile;