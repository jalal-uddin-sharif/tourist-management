import React, { useEffect, useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import { FcCurrencyExchange } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
  // const allSpot = useLoaderData();
  const [allSpot, setAllSpot] = useState([])
useEffect(()=>{
  fetch('https://tourist-server-five.vercel.app/spot-data')
  .then(res => res.json())
  .then(data => setAllSpot(data))
  .catch(err => console.log(err))
},[])

const handleSort = () => {
  const sortedSpot = [...allSpot].sort((a, b) => a["average_cost"] - b["average_cost"]);
  setAllSpot(sortedSpot);
};

  return (
    <div className="my-12 min-h">
      <h1 className="text-center text-3xl font-semibold">
        All tourists sport{" "}
      </h1>
      <button className="btn" onClick={handleSort}>Sort by cost</button>
      <hr className="container mx-auto my-4 border-accent border-2 rounded-t-full" />
      <div className=" container lg:mx-auto mx-4 md:mx-auto lg:w-auto w-[90%] grid lg:grid-cols-2 grid-cols-1 gap-6">
        {allSpot.map((spot) => (
          <div
            key={spot._id}
            className="bg-base-100 shadow-xl  border rounded-lg"
          >
            <div className="lg:grid grid-cols-2">
              <figure className="py-4 pl-4">
                <img
                  className="h-[244px] w-full rounded-lg"
                  src={
                    spot.image ||
                    "https://i.ibb.co/vvCKvDd/Image-not-available.png"
                  }
                  alt="Movie"
                />
                <div className="card-actions mt-4">
                  <Link
                    to={`/spots/${spot._id}`}
                    className="btn btn-accent w-full"
                  >
                    View details
                  </Link>
                </div>
              </figure>
              <div className="p-4 space-y-2">
              
               <h2 className="card-title">{spot.tourists_spot_name}</h2>
                <p><span className="text-primary ">Description :</span> {spot?.short_description?.slice(0, 200)}..more</p>
                <div className="flex gap-5 text-lg font-medium">
                  <h1 className="flex  gap-1">
                    {" "}
                    <CiFlag1 className="mt-1" size={20} color="green" />
                    Country:{" "}
                    <span className="text-success">
                      {spot.country_Name}
                    </span>
                  </h1>
                  <h1 className="flex gap-1">
                    {" "}
                    <MdLocationOn
                      className="mt-1"
                      color="orange"
                      size={20}
                    />{" "}
                    {spot.location}
                  </h1>
                </div>
                <h1 className='flex gap-1 text-lg font-medium'> <FcCurrencyExchange    className='mt-1' color='#1B96EE' size={20} /> 
                    Average cost : {spot.average_cost} BDT</h1>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
