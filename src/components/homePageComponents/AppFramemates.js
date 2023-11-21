import { Link } from '@mui/material'
import React from 'react'
import fileDownload from 'js-file-download'
import axios from 'axios'
export default function AppFramemates() {
    const handleDownload = () => {
        axios.get("https://firebasestorage.googleapis.com/v0/b/framemates-363d4.appspot.com/o/wallpaperflare.com_wallpaper%20(1).jpg?alt=media&token=05c7076f-41a7-456d-b2bc-d212a1457de0", {
            responseType: 'blob',
          })
          .then((res) => {
            fileDownload(res.data, "wallpaperflare.com_wallpaper.jpg")
          })
    }
    return (
        <div className='app-part'>
            <h1 className='first-title'>
                Unleash the Art of Photography
            </h1>
            <h2 className='second-title'>
                Get the app to explore the world of studio
            </h2>
            <div className='download-item'>
                <img src='/images/GooglePlay.png' />
                <p onClick={handleDownload}>Download app</p>
            </div>
        </div>
    )
}
