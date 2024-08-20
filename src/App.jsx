import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About.jsx';
import Degrees from './components/Degrees/Degrees';
import Minors from './components/Minors/Minors.jsx';
import Employment from './components/Employment/Employment.jsx';
import '../src/App.css'
function App() {

  return (
    <>
      <div id = "menu">
        <div id = "logo" class = "section">RIT</div>
        <a className = "section">About</a>
        <a className = "section">Degrees</a>
        <a className="section">Minors</a>
        <a className = "section">Employment</a>
        <a className = "section">People</a>
      </div>

      <About></About>
      <div className='degreesHolder'><Degrees></Degrees></div>
      <div className='degreesHolder'><Minors></Minors></div>
      <Employment></Employment>
    </>
  )
}

export default App
