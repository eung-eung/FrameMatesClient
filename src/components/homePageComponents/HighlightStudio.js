import React from 'react'

export default function HighlightStudio({studio}) {
    console.log(studio)
    return (
        <div className='highlight-studio'>
            <img src={studio.avatarStudio} style={{width: "90px", height: "90px", objectFit: "contain"}}/>
            <div className='studio-info'>
                <p className='studio-name'>{studio.name}</p>
                <ul className='list-categories'>
                    <li>Studio</li>
                    <li>Photographer</li>
                    <li>Make-up</li>
                </ul>
            </div>
        </div>
    )
}
