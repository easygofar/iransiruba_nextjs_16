"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const slide0 = "/images/slider/siruba_slide_7200NM.webp";
// const slide1 = "/images/slider/siruba_slide_700L.webp";
// const slide2 = "/images/slider/siruba_slide_C007L.webp";
// const slide3 = "/images/slider/siruba_slide_BH9820.webp";

// import slide0 from "../../public/images/slider/siruba_slide_7200NM.webp";
// import slide1 from "../../public/images/slider/siruba_slide_700L.webp";
// import slide2 from "../../public/images/slider/siruba_slide_C007L.webp";
// import slide3 from "../../public/images/slider/siruba_slide_BH9820.webp";

import slide0 from "../../public/images/slider/siruba_slide_7200NM.jpg";
import slide1 from "../../public/images/slider/siruba_slide_700L.jpg";
import slide2 from "../../public/images/slider/siruba_slide_C007L.jpg";
import slide3 from "../../public/images/slider/slide_siruba_VC008A.jpg";

export default function SliderSwiperJs() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          enabled: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          {/* <Image src={slide0} objectFit="contain" alt="چرخ راسته دوز 7200NM" /> */}
          <div className="w-full xl:h-105 lg:h-95 md:h-80 sm:h-60 h-40 bg-contain z-0  bg-center aboslute top-0 left-0 bg-no-repeat"
            style={{ backgroundImage: "url('/images/slider/siruba_slide_7200NM.webp')" }}></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w-full xl:h-105 lg:h-95 md:h-80 sm:h-60 h-40 bg-contain  bg-center aboslute top-0 left-0 bg-no-repeat"
            style={{ backgroundImage: "url('/images/slider/siruba_slide_700L.webp')" }}></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w-full xl:h-105 lg:h-95 md:h-80 sm:h-60 h-40 bg-contain  bg-center aboslute top-0 left-0 bg-no-repeat"
            style={{ backgroundImage: "url('/images/slider/siruba_slide_C007L.webp')" }}></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w-full xl:h-105 lg:h-95 md:h-80 sm:h-60 h-40 bg-contain  bg-center aboslute top-0 left-0 bg-no-repeat"
            style={{ backgroundImage: "url('/images/slider/siruba_slide_BH9820.webp')" }}></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
  {/* <Image src={slide1} objectFit="contain" alt="چرخ زیگزال" /> */ }
  {/* <img src="/images/slider/siruba_slide_700L.jpg" width="50%" style={{ display: "block", margin: "0 auto" }} /> */ }
  {/* <img src="/images/slider/siruba_slide_C007L.webp" width="100%" /> */ }
  {/* <Image src={slide2} objectFit="contain" alt="چرخ میاندوز" /> */ }
  {/* <img src="/images/slider/siruba_slide_BH9820.webp" width="100%" /> */ }
  {/* <Image src={slide3} objectFit="contain" alt="چرخ مادگی چشمی" /> */ }
}

