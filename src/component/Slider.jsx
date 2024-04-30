import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slider1 from "/slider1.jpg";
import slider2 from "/slider2.jpg";
import slider3 from "/slider3.jpg";
import slider4 from "/slider4.jpg";


const Slider = () => {
  return (
    <div className="container mx-auto mt-10 relative">
       <div className=" absolute inset-0 flex flex-col  mt-12 z-10 text-center px-32">
        <h1 className="text-5xl font-bold my-6">Hellor there!</h1>
        <p className="text-lg">Welcome to our world of travel and exploration! Join us on a captivating journey through the diverse landscapes and rich cultures of Southeast Asia. From pristine beaches to ancient temples, every corner of this region is filled with awe-inspiring beauty and adventure. Let us inspire your wanderlust and guide you on an unforgettable voyage of discovery. Start your next adventure with us today!</p>
      </div>
      <Swiper
        className="rounded-lg"
        modules={[Scrollbar, A11y,Autoplay, Pagination]}
        autoplay={{ delay: 2000 }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}

      >
        <SwiperSlide>
          <img
            
            src={slider1}
            alt=""
            style={{ width: "100%", height: "650px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            
            src={slider2}
            alt=""
            style={{ width: "100%", height: "650px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            
            src={slider3}
            alt=""
            style={{ width: "100%", height: "650px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            
            src={slider4}
            alt=""
            style={{ width: "100%", height: "650px" }}
          />
        </SwiperSlide>

      </Swiper>
      
    </div>
  );
};

export default Slider;
