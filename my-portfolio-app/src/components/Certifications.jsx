import Outskill from '../assets/Outskill.jpeg';
import FullstackOllama from '../assets/FullstackOllama.jpeg';
import '../components/certificates.css';

function Certifications() {
    return(
        <div>
            <h1>My Certificates</h1>
            <div className='certificate-container'>
                <div className='certificates'>
                    <img src={Outskill} className='certificate-img'/>
                    <p>Generative AI Mastermind at Outskill</p>
                </div>
                <div className='certificates'>
                    <img src={FullstackOllama} className='certificate-img'/>
                    <p>Fullstack AI with Ollama</p>
                </div>
            </div>

        </div>
    );
}

export default Certifications;