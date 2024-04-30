import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Loader from "./Loader";

const CountryCate = () => {
  const [countries, setCountries] = useState([]);
  const {loading, setLoading} = useContext(AuthContext)

  useEffect(() => {
    fetch("https://tourist-server-five.vercel.app/country/")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  console.log(countries);

  if(loading){
    return <Loader/>
  }
  return (
    <div className="container mx-auto ">
      <div className="border-l-2  border-success my-6 px-3">
        <h1 className="text-3xl font-medium">Countries</h1>
        <p className="text-lg">
        Explore our tourist spots in the following countries: Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {countries?.map((country) => (
          <Link key={country._id} to={`/country-spots/${country.country_name}`}>
          <div className="card card-compact bg-base-100 shadow-xl border">
            <figure>
              <img src={country.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{country.country_name}</h2>
              <p className="">{country.description}</p>
            </div>    
          </div>
          </Link>
        ))}
      </div>
      <hr className="my-24 w-4/6 mx-auto" />
    </div>
  );
};

export default CountryCate;
