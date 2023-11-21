import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function About() {
    return (
        <div id='about' className='about-container'>
            <div className='about-left'>
                <h3 className='about-title'>About us</h3>
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
            <div className='arrow-down' onClick={() => window.location.href = "#highlight"}>
                <ArrowDownwardIcon />
            </div>
        </div>
    )
}
