import React, {useState, useEffect} from 'react';
import getData from '../../utils/getData.js';
import DegreesGroup from './DegreesGroup.jsx';
import '../../../src/App.css';
const Degrees = () =>{
    const [loaded, setLoaded] = useState(false);
    const [degreesObj, setDegreesObj] = useState();

    //using React to retrive API information and returning it as a JSON object
    React.useEffect(()=>{
        getData('degrees/').then((json)=> {
          setDegreesObj(json);
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

            <DegreesGroup title="Undergraduate Degrees" whichGroup={degreesObj.undergraduate} />
            <DegreesGroup title="Graduate Degrees" whichGroup={degreesObj.graduate} />

        </>
    )
}

export default Degrees;