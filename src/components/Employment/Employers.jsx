import React from 'react';
import './Employment.css';
export default function Employers({empl = []}){
    return(
        <>
            {empl.map((p, index) =>{
                return(
                    <div key = {index} className='employerHolder'>
                        <p className='employerText'>{p}</p>
                    </div>
                )
            })}
        </>
    )
}