import React, {useState, useEffect} from 'react';
import getData from '../../utils/getData.js';
import PeopleImgList from './PeopleImgList.jsx';
import './People.css'
const People = ()=>{
    const [loaded, setLoaded] = useState(false);
    const [peopleObj, setPeopleObj] = useState();

    //using React to retrive API information and returning it as a JSON object
    React.useEffect(()=>{
        getData('people/').then((json)=> {
            setPeopleObj(json);
            setLoaded(true);
        })  
      }, []);

    if(!loaded){
        return(
            <div>Our people information is loading</div>
        )
    }

    return(
        
        <>
                <PeopleImgList peeps = {peopleObj.faculty} name = "Facutly"></PeopleImgList>
                <PeopleImgList peeps = {peopleObj.staff} name = "Staff"></PeopleImgList>
        </>
    )
}

export default People;