import React from 'react'
import Header from '../components/homePageComponents/header/Header'
import HomeSummary from '../components/homePageComponents/HomeSummary'

export default function HomePage() {
    return (
        <div className='container-home'>
            <Header />
            <HomeSummary />
        </div>
    )
}
