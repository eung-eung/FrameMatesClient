import React from 'react'
import HighlightStudio from './HighlightStudio'

export default function Highlight() {
    return (
        <div className='highlight-part' id='highlight'>
            <p className='highlight-part-title'>Highlight</p>
            <div className='list-hl-studios'>
                <HighlightStudio />
                <HighlightStudio />
                <HighlightStudio />
                <HighlightStudio />
            </div>

        </div>
    )
}
