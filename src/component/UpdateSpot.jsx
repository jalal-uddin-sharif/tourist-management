import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const userName = `${user?.displayName}`;
  const email = `${user?.email}`;
  // console.log(userName, email);
  const [country, setCountry] = useState("");
  const [spot, setSpot] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = country;
    const location = form.location.value;
    const average_cost = +form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totaVisitorsPerYear = +form.totaVisitorsPerYear.value;
    const short_description = form.short_description.value;
    const spotData = {
      image,
      tourists_spot_name,
      country_Name,
      location,
      average_cost,
      seasonality,
      travel_time,
      totaVisitorsPerYear,
      short_description,
      userName,
      email,
    };
    //    form.reset()
    fetch(`https://tourist-server-five.vercel.app/update-spot/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Successfully update the spot data",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  //single spot details
  useEffect(() => {
    fetch(`https://tourist-server-five.vercel.app/spots/${id}`)
      .then((res) => res.json())
      .then((data) => setSpot(data));
  }, []);

  //hangle country selector
  const hangleCountry = (value) => {
    setCountry(value);
  };
  return (
    <div className="mt-4 container mx-auto min-h">
      <div>
        <h1 className="text-center text-3xl font-semibold my-6">
          Update spots data
        </h1>
      </div>
      <form onSubmit={handleForm}>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  justify-between lg:gap-10 gap-2 lg:mx-auto md:mx-auto mx-4 form-control">
          <label className="input input-bordered flex w-full items-center gap-2">
            Imge url :
            <input
              type="text"
              name="image"
              className="grow"
              placeholder="Enter image url"
              defaultValue={spot?.[0].image}
            />
          </label>
          <label className="input input-bordered flex lg:w-full items-center gap-2">
            Tourist spot name :
            <input
              type="text"
              name="tourists_spot_name"
              className="grow"
              placeholder="Type touris spot name"
              defaultValue={spot?.[0].tourists_spot_name}
            />
          </label>
          <select defaultValue={spot?.[0]?.country_Name}
            onChange={(e) => hangleCountry(e.target.value)}
            className="select select-primary w-full max-w-xs"
          >
            <option disabled selected >
              Select country
            </option>
            <option value={"Bangladesh"}>Bangladesh</option>
            <option value={"Thailand"}>Thailand</option>
            <option value={"Indonesia"}>Indonesia</option>
            <option value={"Malaysia"}>Malaysia</option>
            <option value={"Vietnam"}>Vietnam</option>
            <option value={"Cambodia"}>Cambodia</option>
          </select>
          <label className="input input-bordered flex w-full items-center gap-2">
            Location
            <input
              type="text"
              name="location"
              className="grow"
              placeholder="Type location"
              defaultValue={spot?.[0].location}
            />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Average cost :
            <input
              type="text"
              name="average_cost"
              className="grow"
              placeholder="Type cost amount"
              defaultValue={spot?.[0].average_cost}
            />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Seasonality :
            <input
              type="text"
              name="seasonality"
              className="grow"
              placeholder="Type season name"
              defaultValue={spot?.[0].seasonality}
            />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Travel Time :
            <input
              type="text"
              name="travel_time"
              className="grow"
              placeholder="Type travel time"
              defaultValue={spot?.[0].travel_time}
            />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Tota visitors per year :
            <input
              type="text"
              name="totaVisitorsPerYear"
              className="grow"
              placeholder="Type the visitor number"
              defaultValue={spot?.[0].totaVisitorsPerYear}
            />
          </label>
          <label className="flex w-full items-center gap-2">
            Short Description :
            <textarea
              defaultValue={spot?.[0].short_description}
              name="short_description"
              className="textarea grow textarea-bordered"
              placeholder="Write description"
            ></textarea>{" "}
          </label>
        </div>
        <div className="mt-6 flex justify-center gap-6 flex-col lg:flex-row items-center">
          <button className="btn btn-primary btn-wide ">Update</button>
          <Link to={"/my-list"}>
            <button className="btn btn-link ">Back to mylist</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateSpot;
