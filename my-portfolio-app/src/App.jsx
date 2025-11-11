import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <>
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

        <section id="Contact">
            <Contact/>
        </section>
      </div>
      
    </>
  );
}

export default App
