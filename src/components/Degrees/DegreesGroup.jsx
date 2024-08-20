import React from 'react';
import DegreesAccordion from './DegreesAccordion.jsx';

const DegreesGroup = ({title, whichGroup = []})=>{
    return(
        <>
            

            <div>
                <h3>{title}</h3>
                {
                    whichGroup.map((p) =>
                        <div key = {p.degreeName}>
                           
                            {/* sending all information from p to Degrees Accordion so it can be dealt with there */}
                            <DegreesAccordion {...p}></DegreesAccordion>
                        </div>
                    )
                }
            </div>
        </>
        
    );
}

export default DegreesGroup;