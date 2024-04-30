
import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import { FcCurrencyExchange } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Loader from "../component/Loader";
import noDataPic from "../../src/assets/nodata.jpg"
//https://tourist-server-five.vercel.app/country/Bangladesh
const Countries = () => {
  const { country_name } = useParams();
  const {loading, setLoading} = useContext(AuthContext)
  const [allSpot, setAllSpot] = useState([]);
  useEffect(() => {
    setLoading(true)
    fetch(`https://tourist-server-five.vercel.app/country-spots/${country_name}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setAllSpot(data)})
      .catch((err) => console.log(err));
  }, []);

  const handleSort = (key) => {
    console.log(key);
    const sortedSpot = [...allSpot].sort(
      (a, b) => a[key] - b[key]
    );
    setAllSpot(sortedSpot);
  };


  if(loading){
    return <Loader/>
  }
  console.log(country_name);
  return (
    <div className="min-h">
      
        <div className="my-12 min-h">
      <h1 className="text-center text-3xl font-semibold">
        All tourists sports of {country_name}
      </h1>
      <div className="flex justify-center my-4">
        <select onChange={(e)=>handleSort(e.target.value)} className="select select-info w-full max-w-xs">
          <option disabled selected>
            Sort by
          </option>
          <option value="average_cost">Averege cost</option>
        </select>
      </div>
      <hr className="container mx-auto my-4 border-accent border-2 rounded-t-full" />
      {
        allSpot.length > 0 ?
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
                <div className="space-y-2 text-lg font-medium">
                  <h1 className="flex  gap-1">
                    {" "}
                    <CiFlag1 className="mt-1" size={20} color="green" />
                    Country:{" "}
                    <span className="text-success">{spot.country_Name}</span>
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
                <h1 className="flex gap-1 text-lg font-medium">
                  {" "}
                  <FcCurrencyExchange
                    className="mt-1"
                    color="#1B96EE"
                    size={20}
                  />
                  Average cost : {spot.average_cost} BDT
                </h1>
                <p>
                  <span className="text-primary break-all">Description :</span>{" "}
                  {spot?.short_description?.slice(0, 200)}..more
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
     : 
    <div className="flex justify-center p-12">
      <img src={noDataPic} className="h-[400px] w-[500px] rounded-lg" alt="" />
    </div>
      }
      </div>
      {/* <div className="my-12 min-h">
      <h1 className="text-center text-3xl font-semibold">
        All tourists sports of {country_name}
      </h1>
      <div className="flex justify-center my-4">
        <select onChange={(e)=>handleSort(e.target.value)} className="select select-info w-full max-w-xs">
          <option disabled selected>
            Sort by
          </option>
          <option value="average_cost">Averege cost</option>
        </select>
      </div>
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
                <div className="space-y-2 text-lg font-medium">
                  <h1 className="flex  gap-1">
                    {" "}
                    <CiFlag1 className="mt-1" size={20} color="green" />
                    Country:{" "}
                    <span className="text-success">{spot.country_Name}</span>
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
                <h1 className="flex gap-1 text-lg font-medium">
                  {" "}
                  <FcCurrencyExchange
                    className="mt-1"
                    color="#1B96EE"
                    size={20}
                  />
                  Average cost : {spot.average_cost} BDT
                </h1>
                <p>
                  <span className="text-primary break-all">Description :</span>{" "}
                  {spot?.short_description?.slice(0, 200)}..more
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}
    </div>
  );
};

export default Countries;
