import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mail from '../assets/mail.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <Container>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <a href="mailto:enagamani2605@gmail.com">
                            <img src={mail} alt="mail" className='contact-icons'/>
                        </a>
                        <a href="https://github.com/Nagamanicoder">
                            <img src={github} alt="github" className='contact-icons'/>
                        </a>
                        <a href="https://www.linkedin.com/in/e-nagamani" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" className='contact-icons'/>
                        </a>

                        <footer>&copy; 2025 | Designed & Built by E Nagamani</footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;