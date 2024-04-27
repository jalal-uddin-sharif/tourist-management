import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyList = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const [mySpot, setMySpot] = useState([])
console.log(mySpot);
    useEffect(()=>{
        fetch(`http://localhost:3000/myAddedSpot/${user?.email}`)
        .then(res => res.json())
        .then(data => setMySpot(data))
    },[user])
    return (
       <div className='min-h my-10 mx-20'>
            <div className="overflow-x-auto border">
  <table className="table">
    <thead>
      <tr>
        <th></th> 
        <th>Spot name</th> 
        <th>Country name</th> 
        <th>location</th> 
        <th>Avarage cost</th> 
        <th>Update</th> 
        <th>Delete</th>
      </tr>
    </thead> 
    <tbody>
      {
        mySpot?.map((spot, idx)=>(
        <tr key={spot._id}>
        <th>{idx + 1}</th> 
        <td>{spot.spotName}</td> 
        <td>{spot.countryName}</td> 
        <td>{spot.location}</td> 
        <td>{spot.cost}</td> 
        <td>
            <Link to={`/update-spot/${spot._id}`}><button className='btn-link btn  -ml-4'>Update</button></Link>
        </td> 
        <td>
            <button className='btn btn-link -ml-4 text-red-700'>Delete</button>
        </td>
      </tr>
        ))
      }
    </tbody> 
  </table>
</div>
       </div>
    );
};

export default MyList;