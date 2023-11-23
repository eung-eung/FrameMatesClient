import React from 'react'
import { useNavigate } from 'react-router-dom'
import UseToken from '../../utils/UseToken'

export default function Studio({studio}) {
    const navigate = useNavigate()
    const {getToken} = UseToken();
    if(!getToken()) navigate('/login')
    const handleBooking = () => {
        localStorage.removeItem('studio');
        localStorage.setItem('studio', JSON.stringify(studio))
        navigate('/studio/booking')
    }
    return (
        <div className='studio-item'>
            <img src={studio.avatarStudio} />
            <p className='name-studio'>{studio.name}</p>
            <span className='des-studio'>
                {studio.description}
            </span>
            <div className='btn-box'>
                <button className='btn-detail'>More details</button>
                <button className='btn-booking' onClick={() => handleBooking()}>Booking</button>
            </div>
            <button className='btn-favorite'>Favorite</button>
        </div>
    )
}
