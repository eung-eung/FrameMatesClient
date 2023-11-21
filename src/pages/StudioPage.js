import React from 'react'
import Studio from '../components/studioPageComponents/Studio'
import "../styles/StudioPage.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
export default function StudioPage() {
    return (
        <div className='studio-page'>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>  <Studio /></SwiperSlide>
                <SwiperSlide>  <Studio /></SwiperSlide>
                <SwiperSlide>  <Studio /></SwiperSlide>
            </Swiper>

        </div>
    )
}
