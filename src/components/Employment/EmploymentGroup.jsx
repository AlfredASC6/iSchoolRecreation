import React from 'react';
import CoopTable from './CoopTable.jsx';

const EmploymentGroup = ({title, whichGroup = []})=>{
    return(
        <>
            <div>
                <h3>{title}</h3>
                {
                    whichGroup.map((p) =>
                        <div key = {p.employer + '-' + Math.random()}>
                           
                            {/* sending all information from p to CoopTable so it can be dealt with there */}
                            {/* <CoopTable {...p}></CoopTable> */}
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default EmploymentGroup;