import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { CiFlag1 } from "react-icons/ci";
import { MdLocationOn, MdOutlineModeOfTravel } from "react-icons/md";
import { GrFlagFill } from "react-icons/gr";
import { FcCurrencyExchange } from "react-icons/fc";
import { Link } from "react-router-dom";

const TouristsSpot = () => {
  const { setLoading } = useContext(AuthContext);
  const [spotData, setSpotData] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://tourist-server-five.vercel.app/spot-data")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setSpotData(data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);
  // console.log(spotData);
  return (
    <div className="container mx-auto">
      <div className="border-l-2  border-success my-6 px-3">
        <h1 className="text-3xl font-medium">Tourists Spot</h1>
        <p className="text-lg">
          Explore Southeast Asia's finest tourist destinations with us. From
          stunning beaches to historic landmarks, our selection offers the best
          of the region's beauty and culture. Start your adventure now!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {spotData.map((spot) => (
          <div
            key={spot._id}
            className="card bg-base-100 shadow-xl border image-full"
          >
            <figure>
              <img src={spot.image} alt="loading" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Spot : {spot.tourists_spot_name}</h2>
              <h1 className="flex  gap-1">
                {" "}
                <GrFlagFill className="mt-1" size={20} color="#00A500" />
                Country:{" "}
                <span className="text-success">{spot.country_Name}</span>
              </h1>
              <h1 className="flex gap-1">
                {" "}
                <MdLocationOn className="mt-" color="orange" size={23} />{" "}
                {spot.location}
              </h1>
              <h1 className="flex gap-2">
                {" "}
                <MdOutlineModeOfTravel
                  className="mt-"
                  color="#1B96EE"
                  size={20}
                />
                Travel time: {spot.travel_time}
              </h1>
              <div className="card-actions justify-end mt-auto">
                <Link
                  to={`/spots/${spot._id}`}
                  className="btn btn-primary w-full  btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-24 w-4/6 mx-auto" />
    </div>
  );
};

export default TouristsSpot;
