import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slider4 from "/slider4.jpg";


const Slider = () => {
  return (
    <div className="container mx-auto border-4 relative">
       <div className=" absolute inset-0 flex justify-center mt-12 z-10">
        <h1 className="text-5xl font-bold"></h1>
      </div>
      <Swiper
        modules={[Scrollbar, A11y,Autoplay, Pagination]}
        autoplay={{ delay: 2000 }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}

      >
        <SwiperSlide>
          <img
            className=""
            src={slider4}
            alt=""
            style={{ width: "100%", height: "650px" }}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Slider;
