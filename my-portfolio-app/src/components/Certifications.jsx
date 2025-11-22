import Outskill from '../assets/Outskill.jpeg';
import FullstackOllama from '../assets/FullstackOllama.jpeg';
import '../components/certificates.css';

function Certifications() {
    return(
        <section className="certifications-section">
            <div className="container">
                <h1>My Certificates</h1>
                <div className='certificate-container'>
                    <div className='certificates'>
                        <img src={Outskill} className='certificate-img' alt="Outskill certificate"/>
                        <p>Generative AI Mastermind at Outskill</p>
                    </div>
                    <div className='certificates'>
                        <img src={FullstackOllama} className='certificate-img' alt="Ollama certificate"/>
                        <p>Fullstack AI with Ollama</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certifications;