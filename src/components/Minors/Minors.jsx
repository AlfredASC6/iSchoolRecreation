import React, {useState, useEffect} from 'react';
import getData from '../../utils/getData.js';
import MinorsAccordion from './MinorsAccordion.jsx';
import MinorsGroup from './MinorsGroup.jsx'
import '../../../src/App.css';

const Minors = ()=>{
    const [loaded, setLoaded] = useState(false);
    const [minorsObj, setMinorsObj] = useState();

    //using React to retrive API information and returning it as a JSON object
    React.useEffect(()=>{
        getData('minors/').then((json)=> {
          setMinorsObj(json);
          setLoaded(true);
        //   console.log(json);
        })
      }, []);

    if(!loaded){
        return(
            <>
                <div>Degrees are loading...</div>
            </>
        )
    }

    return(
        <>
            <MinorsGroup title = "Undergraduate Minors" whichGroup={minorsObj.UgMinors}></MinorsGroup>
        </>
    )
}

export default Minors;