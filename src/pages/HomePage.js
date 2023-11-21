import React from 'react'
import Header from '../components/homePageComponents/header/Header'
import HomeSummary from '../components/homePageComponents/HomeSummary'
import Highlight from '../components/homePageComponents/Highlight'

export default function HomePage() {
    return (
        <div className='container-home'>
            <Header />
            <HomeSummary />
            <Highlight />
        </div>
    )
}
