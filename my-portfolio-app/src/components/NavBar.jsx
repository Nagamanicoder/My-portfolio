import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navigationbar(){
    const [open, setOpen] = useState(false);

    return (
      <nav className="navbar-border">
        <div className="container-fluid px-3 px-md-4 py-2 d-flex align-items-center justify-content-between">
          <a href="#home" className="navbar-brand font-bold d-none d-md-inline mb-0">NAGAMANI</a>

          <button
            className="navbar-toggler d-md-none"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(prev => !prev)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div id="primary-navigation" className={`nav-links ${open ? 'show' : ''} px-md-4 py-2 d-md-flex align-items-center`}>
            <a href="#home" className='nav-text nav-link'>Home</a>
            <a href="#Skills" className='nav-text nav-link'>Skills</a>
            <a href="#Projects" className='nav-text nav-link'>Projects</a>
            <a href="#Certifications" className='nav-text nav-link'>Certifications</a>
            <a href="#Achivements" className='nav-text nav-link'>Achivements</a>
            <a href="#Contact" className='nav-text nav-link'>Contact</a>
            <a href="public/resume.pdf" target="_blank" rel="noreferrer" className='nav-text nav-link'>Resume</a>
          </div>
        </div>
      </nav>
    )
}

export default Navigationbar;


