import './certifications.css';
import CERTIFICATIONS from '../Data/CertificationsData.jsx';

const CertificateCard = ({ certificate }) => (
    /* Changed class to "certificates" to match your CSS */
    <div className="certificates">
        <img 
            src={certificate.image} 
            alt={certificate.alt} 
            className='certificate-img' 
        />
        <div className='certificate-description'>
            <h2 className='certificates-heading'>{certificate.title}</h2> 
            <p><strong>Issuer:</strong> {certificate.issuer}</p>
        </div>
    </div>
);  

const CertificationsSection = () => {
    return (
        /* Added 'certifications-section' class to match your CSS selectors */
        <section className="certifications-section">
            <div className='container'>     
                <h1>CERTIFICATIONS</h1>
                <div className='certificate-container'>
                    {CERTIFICATIONS.map(certificate => (        
                        <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}        
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;