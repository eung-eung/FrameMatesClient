import React from 'react'

export default function AppFramemates() {
    return (
        <div className='app-part' id='app'>
            <h1 className='first-title'>
                Unleash the Art of Photography
            </h1>
            <h2 className='second-title'>
                Get the app to explore the world of studio
            </h2>
            <div className='download-item'>
                <img src='/images/GooglePlay.png' />
                <p>Download app</p>
            </div>

            <div className='footer'>
                <div className='footer-sub'>
                    <p>Subscribe for newsletter</p>
                    <input placeholder='Your email' className='subscribe' />
                </div>

                <div className='list-footer'>
                    <a href='#about'>About us</a>
                    <a href='#studio'>Studio</a>
                    <a href='#contact'>Contact</a>
                </div>
                <div className='term'>
                    <p>Term and Privacy</p>
                </div>
            </div>
        </div>
    )
}
