import React, { useEffect, useState } from 'react'
import HighlightStudio from './HighlightStudio'
import UseHttpClient from '../../utils/httpClient'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Highlight() {
    const {get} = UseHttpClient();
    const [studios, setStudios] = useState([])
    useEffect(() => {
        get('/studios').then(res => res.data).then(data => {
            setStudios(data.slice(0, 4))
            // console.log(studios)
        })
    },[])
    return (
        <div className='highlight-part' id='highlight'>
            <p className='highlight-part-title'>Highlight</p>
            <div className='list-hl-studios'>
                {
                    studios.map((studio, index) => {
                        return <HighlightStudio studio={studio} key={index} />
                    })
                }
            </div>
            <div className='arrow-down' onClick={() => window.location.href = "#app"}>
                <ArrowDownwardIcon />
            </div>
        </div>
    )
}
