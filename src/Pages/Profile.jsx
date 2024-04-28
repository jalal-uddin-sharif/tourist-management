import React, { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import profileImg from '../../src/assets/profile.png'

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [update, setUpdate] = useState(false)
  console.log(user);
  return (
    <div className="min-h flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl border-2 p-4">
        <figure className="px-10 py-2">
          <img
            src={user.photoURL || profileImg}
            alt="Shoes"
            className="rounded-full h-[150px] w-[150px] border-2 border-accent p-1"
          />
        </figure>
        <div>
            {update ? <div className="text-lg font-medium space-y-2">
            <h1>Name: <span className="text-success">{user?.displayName}</span></h1>
            <h1>Email: <span className="text-error break-all">{user?.email}</span></h1>
            <h1 className="">Photo Url: <span className="text-primary break-all text-base">{user?.photoURL}</span></h1>
            </div> : 
            <div className="space-y-3 mt-4">
              <input className="bg-cyan-100 p-2 rounded-md w-full outline-none text-primary text-base" type="text" placeholder="Enter your Name" />
              <input className="bg-cyan-100 p-2 rounded-md w-full outline-none text-primary text-base" type="text" placeholder="Enter photo url" />
            </div>}
          <div className="card-actions">
            {
              update ? 
              <button onClick={()=>setUpdate(!update)} className="btn btn-primary btn-sm w-full mt-4">Update Profile</button> :
              <button onClick={()=>setUpdate(!update)} className="btn btn-primary btn-sm w-full mt-4">Save</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
