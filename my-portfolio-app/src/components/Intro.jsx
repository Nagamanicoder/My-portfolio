import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './intro.css';
import  MyImage from '../assets/my-image.jpeg';

function Intro() {
    return(
    <div>
        <Container className="intro-text">
        <Row>
            <Col>
            <div>
                <h1>
                E Nagamani
                </h1>
                <h5>
                I translate design concepts into high-quality code, focusing on the creation of reusable components 
                and efficient state management using modern JavaScript (ES6+), HTML5, and CSS3.
                    <br/>
                Beyond UI creation, I am a dedicated DSA Enthusiast with demonstrated project 
                experience in Deep Learning and fundamental MCP (Model Context Protocol) models.
                </h5>
            </div>
            </Col>
            <Col>
                <div>
                    <img src={MyImage} alt="My Image" className="my-image"/>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
    
  );
  
}

export default Intro;