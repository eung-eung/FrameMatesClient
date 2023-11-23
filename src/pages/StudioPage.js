import React, { useEffect, useState } from 'react'
import Studio from '../components/studioPageComponents/Studio'
import "../styles/StudioPage.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import UseHttpClient from '../utils/httpClient';
export default function StudioPage() {
    const [studios, setStudios] = useState([]);
    const { get } = UseHttpClient();
    useEffect(() => {
        get('/studios').then(res => res.data).then(data => {
            console.log(data)
            setStudios(data)
        })
    }, [])
    return (
        <div className='studio-page'>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                {studios.map((studio, index) => 
                    <SwiperSlide>  <Studio studio={studio}/></SwiperSlide>
                )}
            </Swiper>

        </div>
    )
}
