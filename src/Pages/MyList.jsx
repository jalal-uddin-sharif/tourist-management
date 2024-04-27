import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [mySpot, setMySpot] = useState([]);
  const [control, setControl] = useState(false);
  console.log(mySpot);
  useEffect(() => {
    fetch(`https://tourist-server-five.vercel.app/my-added-spot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMySpot(data));
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourist-server-five.vercel.app/delete-spot/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                setControl(!control)
                console.log(data)
                if(data.deletedCount > 0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your data has been deleted.",
                    icon: "success",
                  });
                }
              })
              
      }
    });
  };
  return (
    <div className="min-h my-10 mx-20">
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
            {mySpot?.map((spot, idx) => (
              <tr key={spot._id}>
                <th>{idx + 1}</th>
                <td>{spot.spotName}</td>
                <td>{spot.countryName}</td>
                <td>{spot.location}</td>
                <td>{spot.cost}</td>
                <td>
                  <Link to={`/update-spot/${spot._id}`}>
                    <button className="btn-link btn  -ml-4">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(spot._id)}
                    className="btn btn-link -ml-4 text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
