import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';

const AddTouristsSpot = () => {
  const {user} = useContext(AuthContext)
  const userName = `${user?.displayName}`
  const email = `${user?.email}`
  console.log(userName, email);
  const handleForm = (e) => {
    e.preventDefault()
   const form = e.target;
   const imageUrl = form.imageUrl.value;
   const spotName = form.spotName.value;
   const countryName = form.countryName.value;
   const location = form.location.value;
   const cost = form.cost.value;
   const season = form.season.value;
   const time = form.time.value;
   const visitorPerYear = form.visitorPerYear.value;
   const textArea = form.textArea.value;
   console.log(imageUrl, spotName, countryName, location, cost, season, time, visitorPerYear, textArea)
   const spotData = {imageUrl, spotName, countryName, location, cost, season, time, visitorPerYear, textArea, userName, email}
//    form.reset()
  console.log(spotData);
    fetch('http://localhost:3000/spot-data',{
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(spotData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Added!',
          text: 'Successfully added the spot data',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  };
  return (
    <div className="mt-4 container mx-auto min-h">
      <form onSubmit={handleForm}>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  justify-between lg:gap-10 gap-2 lg:mx-auto md:mx-auto mx-4 form-control">
          <label className="input input-bordered flex w-full items-center gap-2">
            Imge url :
            <input type="text" name="imageUrl"  className="grow" placeholder="Enter image url" />
          </label>
          <label className="input input-bordered flex lg:w-full items-center gap-2">
            Tourist spot name :
            <input type="text" name="spotName" className="grow" placeholder="Type touris spot name" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Country name :
            <input type="text" name="countryName" className="grow" placeholder="Type country name" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Location
            <input type="text" name="location" className="grow" placeholder="Type location" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Average cost :
            <input type="text" name="cost" className="grow" placeholder="Type cost amount" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Seasonality :
            <input type="text" name="season" className="grow" placeholder="Type season name" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Travel Time :
            <input type="text" name="time" className="grow" placeholder="Type travel time" />
          </label>
          <label className="input input-bordered flex w-full items-center gap-2">
            Tota visitors per year :
            <input type="text" name="visitorPerYear" className="grow" placeholder="Type the visitor number" />
          </label>
          <label className="flex w-full items-center gap-2">
            Short Description :
            <textarea name="textArea"
              className="textarea grow textarea-bordered"
              placeholder="Write description"
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
