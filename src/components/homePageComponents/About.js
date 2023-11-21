import React from 'react'

export default function About() {
    return (
        <div className='about-container'>
            <div className='about-left'>
                <h3 className='about-title' id='about'>About us</h3>
                <div className='about-left-container'>
                    <p className='about-des'>We, as a passionate team with creativity and enthusiasm,
                        are proud to introduce our photography studio booking application.
                        Founded with the mission of making art and creativity more accessible than ever,
                        we have created a platform that connects photographers,
                        artists and art enthusiasts with quality photography studio.</p>
                    <div className='about-action'>
                        <button className='action-btn'>Read more</button>
                        <button className='action-btn'>Contact us</button>
                    </div>
                </div>

            </div>
            <div className='about-right'>
                <img src='/images/Rectangle13.png' />
            </div>
        </div>
    )
}
