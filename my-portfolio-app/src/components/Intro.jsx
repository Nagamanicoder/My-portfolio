import './intro.css';
import  MyImage from '../assets/my-image.jpeg';

function Intro() {
    return(
    <div className="intro">
        <div className="intro-text">
            <h1>
                Hello, I'm Nagamani
            </h1>
            <h5>
                I translate design concepts into high-quality code, focusing on the creation of reusable components 
                and efficient state management using modern JavaScript (ES6+), HTML5, and CSS3.
            </h5>
            <h5>
                Beyond UI creation, I am a dedicated DSA Enthusiast with demonstrated project 
                experience in Deep Learning and fundamental MCP (Model Context Protocol) models.
            </h5>
        </div>
        <div className="intro-image">
            <img src={MyImage} alt="My Image" className="my-image"/>
        </div>
    </div>
    
  );
  
}

export default Intro;