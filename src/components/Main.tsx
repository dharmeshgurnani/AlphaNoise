import * as React from "react"
import { NoiseGenerator } from "./NoiseGenerator"

// Import Swiper React components and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Dashboard = () => {
  return (<Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)} >
    <SwiperSlide>
      <NoiseGenerator />
    </SwiperSlide>
    <SwiperSlide >
      <NoiseGenerator />
    </SwiperSlide>
  </Swiper>);
};

export const Main = () => (
<Dashboard />
//TODO: settings
//TODO: About
);