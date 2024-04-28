import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
  const allSpot = useLoaderData();
  console.log(allSpot);
  return (
    <div className="my-12 min-h">
      <h1 className="text-center text-3xl font-semibold">All tourists sport </h1>
      <hr className="container mx-auto my-4 border-accent border-2 rounded-t-full"/>
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
                src={spot.imageUrl || "https://i.ibb.co/vvCKvDd/Image-not-available.png"}
                alt="Movie"
              />
            </figure>
            <div className="p-4">
              <h2 className="card-title">{spot.spotName}</h2>
              <p>{spot.textArea.slice(0, 200)}</p>
              <div className="flex gap-5">
                <h1>{spot.countryName}</h1>
                <h1>{spot.location}</h1>
              </div>
              <h1>Cost : {spot.cost} BDT</h1>
              <div className="card-actions">
                <Link to={`/spots/${spot._id}`} className="btn btn-accent btn-wide">
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllTouristsSpot;
