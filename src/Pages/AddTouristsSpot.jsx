import React from "react";

const AddTouristsSpot = () => {
  const handleForm = (e) => {
    e.preventDefault()
   const form = e.target;
   const imageUrl = form.imageUrl.value;
   console.log(imageUrl)
//    form.reset()
  };
  return (
    <div className="mt-4 container mx-auto ">
      <form onSubmit={handleForm} className="">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  justify-between lg:gap-10 gap-2 lg:mx-auto md:mx-auto mx-4 form-control">
          <label className="input input-bordered flex w-full items-center gap-2">
            Imge url :
            <input type="text" name="imageUrl"  className="grow" placeholder="Enter image url" />
          </label>
          <label className="input input-bordered flex lg:w-full items-center gap-2">
            Tourist spot name :
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Country name :
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Location
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Average cost :
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Seasonality :
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Travel Time :
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Tota visitors per year :
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="flex w-full items-center gap-2">
            Short Description :
            <textarea
              className="textarea grow textarea-bordered"
              placeholder="Bio"
            ></textarea>{" "}
          </label>
        </div>
        <div className="form-control mt-6 flex justify-center items-center">
          <button className="btn btn-primary btn-wide ">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
