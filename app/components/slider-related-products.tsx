"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { IfModelType } from "../../utils/types";

export default function SliderRelatedProducts(params: { models: IfModelType[] }) {
    const { models } = params;
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                    enabled: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="related-product-swiper m-auto"
            >
                {models.map((model, index) => {
                    return <SwiperSlide key={index}>
                        <img src={`/images/siruba-swing-machines/webp_${model.image.split(".")[0]
                            }.webp`}
                            className="w-40 text-center m-auto"
                            alt={model.sub_category} />
                        <p className="text-center text-xm">{model.title}</p>
                        <p className="text-center text-sm leading-5">{model.sub_category}</p>
                    </SwiperSlide>

                })}
            </Swiper>
        </>
    );
}
