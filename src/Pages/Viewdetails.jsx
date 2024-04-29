import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiFlag1 } from "react-icons/ci";
import { MdLocationOn, MdOutlineModeOfTravel } from 'react-icons/md';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { FcCurrencyExchange } from 'react-icons/fc';
import { GiNightVision } from 'react-icons/gi';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import Loader from '../component/Loader';

const Viewdetails = () => {
    const {loading, setLoading} = useContext(AuthContext)
    const {id} = useParams()
    const [spot, setSpot] = useState(null)
        useEffect(()=>{
            setLoading(true)
            fetch(`https://tourist-server-five.vercel.app/spots/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setSpot(data)})
           },[])
           
if(loading){
    return <Loader/>
}
    return (
        <div className='min-h container mx-auto'>
            <div className='lg:grid grid-cols-2 my-8 gap-10 items-center'>
                <div className=''>
                    <img src={spot?.[0].image || "https://i.ibb.co/vvCKvDd/Image-not-available.png"}
                    className='rounded-t-lg border-2'
                    alt="" />
                    <h1 className='text-center p-2 font-medium text-lg border-success  rounded-b-lg border-b-4 border-l-4 border-r-4'>{spot?.[0].tourists_spot_name}</h1>
                </div>
                <div className='text-2xl font-semibold space-y-3'>
                    <h1 className='flex  gap-2'> <CiFlag1 className='mt-2' size={23} color='green'/>Country: <span className='text-success'>{spot?.[0].country_Name}</span></h1>
                    <h1 className='flex gap-2'> <MdLocationOn className='mt-2' color='orange' size={20} /> {spot?.[0].location}</h1>
                    <h1 className='flex gap-2'> <TiWeatherWindyCloudy  className='mt-2' color='#1B96EE' size={20} />
                    Season: {spot?.[0].seasonality}</h1>
                    <h1 className='flex gap-2'> <MdOutlineModeOfTravel   className='mt-2' color='#1B96EE' size={20} /> 
                    Travel time: {spot?.[0].travel_time}</h1>
                    <h1 className='flex gap-2'> <FcCurrencyExchange    className='mt-2' color='#1B96EE' size={20} /> 
                    Average cost: {spot?.[0].average_cost}</h1>
                    <h1 className='flex gap-2'> <GiNightVision className='mt-2' color='#1B96EE' size={20} /> 
                    Total visitor per year: {spot?.[0].totaVisitorsPerYear}</h1>
                    <h1 className='text-lg'> 
                    <span className='border-b-2 border-primary'>Description:</span> {spot?.[0].short_description}</h1>

                </div>
            </div>
        </div>
    );
};

export default Viewdetails;