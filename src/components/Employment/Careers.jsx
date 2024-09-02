import react from 'react';
import './Employment.css'

export default function Careers({careers = []}){
    const icons = []
    return(
        <>
            {
                careers.map((p, index) =>{
                    return(
                        <div key = {index} className='careers'>
                            <p className='careersText'>{p}</p>
                        </div>
                    )
                })
            }
        </>
    )
}