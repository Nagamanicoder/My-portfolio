import mail from '../assets/mail.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './contact.css';

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-inner">
                <div className="contact-icons-row" aria-label="contact links">
                    <a href="mailto:enagamani2605@gmail.com">
                        <img src={mail} alt="mail" className='contact-icons'/>
                    </a>
                    <a href="https://github.com/Nagamanicoder" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className='contact-icons'/>
                    </a>
                    <a href="https://www.linkedin.com/in/e-nagamani" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className='contact-icons'/>
                    </a>
                </div>

                <footer className="contact-footer">&copy; 2025 &nbsp;|&nbsp; Designed &amp; Built by E Nagamani</footer>
            </div>
        </section>
    );
}

export default Contact;