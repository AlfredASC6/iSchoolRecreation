import { useState } from 'react'

import './App.css'
import About from './components/About.jsx';
import Degrees from './components/Degrees/Degrees';
import Minors from './components/Minors/Minors.jsx';
import Employment from './components/Employment/Employment.jsx';
import People from './components/People/People.jsx';
import './App.css';
function App() {
  const [isPanelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen(isPanelOpen);
  };

  return (
    <>
      <div id="menu" className={isPanelOpen ? 'menu-hidden' : ''}>
        <div id="logo" className="section">RIT</div>
        <a className="section" href='#about'>About</a>
        <a className="section" href='#degrees'>Degrees</a>
        <a className="section" href='#minors'>Minors</a>
        <a className="section" href='#employment'>Employment</a>
        <a className="section" href='#people'>People</a>
      </div>

      {/* Hamburger Button */}
      <button id="menu-toggle" className="menu-toggle" onClick={togglePanel}>
        &#9776;
      </button>

      {/* Side Panel */}
      <div id="side-panel" className={isPanelOpen ? 'side-panel-visible' : 'side-panel-hidden'}>
        <a className="section" href="#about" onClick={togglePanel}>About</a>
        <a className="section" href="#degrees" onClick={togglePanel}>Degrees</a>
        <a className="section" href="#minors" onClick={togglePanel}>Minors</a>
        <a className="section" href="#employment" onClick={togglePanel}>Employment</a>
        <a className="section" href="#people" onClick={togglePanel}>People</a>
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
