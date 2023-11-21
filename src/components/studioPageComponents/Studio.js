import React from 'react'

export default function Studio() {
    return (
        <div className='studio-item'>
            <img src='/images/Frame74.png' />
            <p className='name-studio'>Artium</p>
            <span className='des-studio'>
                With the criteria of choosing a spacious,
                unique, cozy space and many different contexts,
                will certainly be the right choice.
            </span>
            <div className='btn-box'>
                <button className='btn-detail'>More details</button>
                <button className='btn-booking'>Booking</button>
            </div>
            <button className='btn-favorite'>Favorite</button>
        </div>
    )
}
