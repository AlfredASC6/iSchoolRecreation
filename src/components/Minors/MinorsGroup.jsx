import React from 'react';
import MinorsAccordion from './MinorsAccordion.jsx';
const MinorsGroup = ({title, whichGroup = []})=>{
    return(
        <>
            <div>
                <h3>{title}</h3>

                {
                    whichGroup.map((p) =>
                        <div key = {p.name}>
                           
                            {/* sending all information from p to Degrees Accordion so it can be dealt with there */}
                            <MinorsAccordion {...p}></MinorsAccordion>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default MinorsGroup;