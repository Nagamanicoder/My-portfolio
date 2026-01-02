import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Achivements from './components/Achivements';
import ParticleBackground from './components/ParticleBackground';
import './App.css';




function App() {
  return (
    <>
      {/* <ParticleBackground/> */}
      <div className='components-container'>
        
        <section id="home">
          <Intro/>
        </section>

        <section id="Skills">
            <Skills/>
        </section>

        <section id="Projects">
            <Projects/>
        </section>

        <section id="Certifications">
            <Certifications/>
        </section>

        <section id="Achivements">
            <Achivements/>
        </section> 

        <section id="Contact">
            <Contact/>
        </section>
      </div>
      
    </>
  );
}

export default App
