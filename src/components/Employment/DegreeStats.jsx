import React from 'react';
import './Employment.css';
import PaidIcon from '@mui/icons-material/Paid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import MemoryIcon from '@mui/icons-material/Memory';

export default function DegreeStats({stats = []}){
    const icons = [
        <p><PaidIcon sx={{color: "#F76902", height: '2vw'}}></PaidIcon></p>,
        <p><EmojiEventsIcon sx={{color: "#F76902", height: '2vw'}}></EmojiEventsIcon></p>,
        <p><OpenInBrowserIcon sx={{color: "#F76902", height: '2w'}}></OpenInBrowserIcon></p>,
        <p><MemoryIcon sx={{color: "#F76902", height: '2vw'}}></MemoryIcon></p>
    ]

    return(
        <>
            {
                stats.map((p, index) =>{
                    return(
                    <div key = {index} className = "stats">
                        {icons[index]}
                        <p className='statsText'>{p.value}</p>
                        <p className='statsText'>{p.description}</p>
                    </div>
                    )
                })
            }
        </>
    );
}