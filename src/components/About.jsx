import React, {useState, useEffect} from 'react';
import getData from '../utils/getData.js';

const About = ()=>{
    const [loaded, setLoaded] = useState(false);
    const [aboutObj, setAboutObj] = useState();
    //using React to retrive API information and returning it as a JSON object
    React.useEffect(()=>{
        getData('about/').then((json)=> {
          setAboutObj(json);
          setLoaded(true);
        })
      }, []);

    //if not loaded return following
  if(!loaded){
    return(
      <>
      <br />
      <br />

      <div className='loadHolder'>
        <h4>About section loading...</h4>
      </div>
        
      </>
    )
  }

  return(
    
    <div>
        <br />

        <h2>Rochester Institute of Technology</h2>

        <h2>{aboutObj.title}</h2>

        <p>{aboutObj.description}</p>

        <p>{aboutObj.quote}</p>

        <p>- {aboutObj.quoteAuthor}</p>
    </div>
  )
}

export default About;