import React, {useState, useEffect} from 'react';
import getData from '../../utils/getData.js';
import CoopTable from './CoopTable.jsx';
import EmploymentTable from './EmploymentTable.jsx';
import '../../../src/App.css'
const Employment = () =>{
    const [loaded, setLoaded] = useState(false);
    const [employmentObj, setEmploymentObj] = useState();

    //using React to retrive API information and returning it as a JSON object
    React.useEffect(()=>{
        getData('employment/').then((json)=> {
          setEmploymentObj(json);
          setLoaded(true);
        })
      }, []);

    if(!loaded){
        return(
            <div>Our employment information is loading</div>
        )
    }
    
    return(
      <>
      

        <div className='degreesHolder'>
          <CoopTable title = "Coop Table" whichGroup = {employmentObj.coopTable}></CoopTable>
          <EmploymentTable title = "Employment Table" whichGroup = {employmentObj.employmentTable}></EmploymentTable>
        </div>

        
      </>
    )
}

export default Employment;