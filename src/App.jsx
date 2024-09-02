import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About.jsx';
import Degrees from './components/Degrees/Degrees';
import Minors from './components/Minors/Minors.jsx';
import Employment from './components/Employment/Employment.jsx';
import People from './components/People/People.jsx';
// import '../src/App.css'
function App() {

  return (
    <>
      <div id = "menu">
        <div id = "logo" class = "section">RIT</div>
        <a className = "section" href='#about'>About</a>
        <a className = "section" href='#degrees'>Degrees</a>
        <a className="section" href='#minors'>Minors</a>
        <a className = "section" href='#employment'>Employment</a>
        <a className = "section" href='#people'>People</a>
      </div>

      <div id = "about"><About></About></div>
      <div className='degreesHolder' id = "degrees"><Degrees></Degrees></div>
      <div className='degreesHolder' id = "minors"><Minors></Minors></div>
      <div id = "employment"><Employment ></Employment></div>
      <h2>Meet our people</h2>
      <div id = "people"><People></People></div>
      
    </>
  )
}

export default App
