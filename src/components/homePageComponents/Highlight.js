import React from 'react'
import HighlightStudio from './HighlightStudio'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
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
            <div className='arrow-down' onClick={() => window.location.href = "#app"}>
                <ArrowDownwardIcon />
            </div>
        </div>
    )
}
