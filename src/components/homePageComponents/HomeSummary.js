import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function HomeSummary() {
    return (
        <>
            <div className='home-package'>
                <div className='our-studio'>
                    <img src='/images/Rectangle7.png' />
                    <div className='our-studio-content'>
                        <p className='offers'>more offers</p>
                        <p>We</p>
                        <p>have</p>
                        <p>something</p>
                        <p>for you</p>
                    </div>
                </div>
                {/* mid */}
                <div className='middle-content'>
                    <div className='about'>
                        <p>About us</p>
                        <div className='about-content'>
                            <span>Discovery</span>
                            <EastOutlinedIcon sx={{ fontSize: "40px", color: "#fff" }} />
                        </div>
                    </div>
                    <div className='contact'>
                        <div className='contact-content'>
                            <span>Contact</span>
                            <NearMeOutlinedIcon sx={{ fontSize: "40px", color: "#000000" }} />
                        </div>
                        <p className='send-ques'>Send us a question?</p>
                    </div>
                </div>
                {/* 3rd */}
                <div className='highlight'>
                    <img src='/images/Rectangle10.png' />
                    <p>Highlight</p>
                </div>

                <div className='arrow-down' onClick={() => window.location.href = "#about"}>
                    <ArrowDownwardIcon />
                </div>
            </div>


        </>
    )
}
