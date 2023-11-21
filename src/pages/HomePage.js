import React from 'react'
import Header from '../components/homePageComponents/header/Header'
import HomeSummary from '../components/homePageComponents/HomeSummary'
import Highlight from '../components/homePageComponents/Highlight'
import About from '../components/homePageComponents/About'
import AppFramemates from '../components/homePageComponents/AppFramemates'

export default function HomePage() {
    return (
        <div className='container-home'>
            <Header />
            <HomeSummary />
            <About />
            <Highlight />
            <AppFramemates />
        </div>
    )
}
