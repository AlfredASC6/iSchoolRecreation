import React, {useState, useEffect} from 'react';
import getData from '../../utils/getData.js';
import CoopTable from './CoopTable.jsx';
import EmploymentTable from './EmploymentTable.jsx';
import DegreeStats from './DegreeStats.jsx';
import Employers from './Employers.jsx';
import Careers from './Careers.jsx';
import '../../../src/App.css';
import './Employment.css';
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
        <h3 id = "firstEmplTitle">{employmentObj.introduction.title}</h3>
        <div className='degreesHolder'>
          <div id = "emplL">
            <h3>{employmentObj.introduction.content[0].title}</h3>
            <p>{employmentObj.introduction.content[0].description}</p>
          </div>

          <div id = "emplR">
            <h3>{employmentObj.introduction.content[1].title}</h3>
            <p>{employmentObj.introduction.content[1].description}</p>
          </div>
        </div>

        <h2>{employmentObj.degreeStatistics.title}</h2>
        <div id = "degreeStats">
            <DegreeStats stats = {employmentObj.degreeStatistics.statistics}></DegreeStats>
        </div>

        <h2 className='employmentTitles'>{employmentObj.employers.title}</h2>
        <div id = "employers">
          <Employers empl = {employmentObj.employers.employerNames}></Employers>
        </div>

        <h2 id = "careerTitle">{employmentObj.careers.title}</h2>
        <div id = "careers">
          <Careers careers={employmentObj.careers.careerNames}></Careers>
        </div>

        <h2 className='employmentTitles'> Coop and Employmenet Tables</h2>
        <div id ='tables'>
          <CoopTable title = "Coop Table" whichGroup = {employmentObj.coopTable}></CoopTable>
          <EmploymentTable title = "Employment Table" whichGroup = {employmentObj.employmentTable}></EmploymentTable>
        </div>
        
      </>
    )
}

export default Employment;