import './skills.css';
import HTMLlogo from '../assets/HTMLlogo.png';
import CSS from '../assets/CSS.png';
import JS from '../assets/JS.png';
import ReactJS from '../assets/ReactJS.png';
import django from '../assets/django.png';
import mysql from '../assets/mysql.png';
import postgresql from '../assets/postgresql.png';
import python from '../assets/python.png';
import git from '../assets/git.png';

function Skills(){
    return (
        <div>
            <div className='container'>
                <h1>
                    My Skill Set
                </h1>
                <div className="skills-Container">
                    <div className="skill-card">
                        <img src={HTMLlogo} alt="HTML5 Logo" className='skill-image' />
                        <h6>HTML5</h6>
                    </div>
                    <div className="skill-card">
                        <img src={CSS} alt="CSS Logo" className='skill-image' />
                        <h6>CSS</h6>
                    </div>
                    <div className="skill-card">
                        <img src={JS} alt="JS Logo" className='skill-image' />
                        <h6>Java Script</h6>
                    </div>
                    <div className="skill-card">
                        <img src={ReactJS} alt="react Logo" className='skill-image' />
                        <h6>React JS</h6>
                    </div>
                    <div className="skill-card">
                        <img src={django} alt="django Logo" className='skill-image' />
                        <h6>Django</h6>
                    </div>
                    <div className="skill-card">
                        <img src={mysql} alt="mysql Logo" className='skill-image' />
                        <h6>My sql</h6>
                    </div>
                    <div className="skill-card">
                        <img src={postgresql} alt="postgresql Logo" className='skill-image' />
                        <h6>Postgre sql</h6>
                    </div>
                    <div className="skill-card">
                        <img src={python} alt="python Logo" className='skill-image' />
                        <h6>Python</h6>
                    </div>
                    <div className="skill-card">
                        <img src={git} alt="git Logo" className='skill-image' />
                        <h6>Git & Github</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;