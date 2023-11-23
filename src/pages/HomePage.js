import React, { useEffect, useState } from 'react'
import Header from '../components/homePageComponents/header/Header'
import HomeSummary from '../components/homePageComponents/HomeSummary'
import Highlight from '../components/homePageComponents/Highlight'
import About from '../components/homePageComponents/About'
import AppFramemates from '../components/homePageComponents/AppFramemates'
import UseHttpClient from '../utils/httpClient'

export default function HomePage({ setNav }) {
    const {put} = UseHttpClient();
    useEffect(() => {
        put("/views/web")
    },[])
    return (
        <div className='container-home'>
            <HomeSummary setNav={setNav} />
            <About />
            <Highlight />
            <AppFramemates />
        </div>
    )
}
