import StudentMemberCertificate from '../assets/StudentMemberCertificate.jpeg';
import StudentMemberME from '../assets/StudentMemberME.jpeg';   
import '../components/Achivements.css';

function Achivements(){
    return (
        <section className="achivements-section">
            <div className="container">
                <h1>My Achivements</h1>

                <div className='achivements-row'>
                    <div className='achivements-container'>
                        <img src={StudentMemberCertificate}  className="achivements-img" alt="certificate" />
                    </div>
                    <div className='achivements-container'>
                        <img src={StudentMemberME} className="achivements-img" alt="membership" />
                    </div>
                </div>

                <p className='description'>
                    Received '<strong>BEST STUDENT AWARD</strong>' certificate from 'Indian Society For Technical Education (ISTE) Karnataka Section' for the year 2024-25 and became a <strong>student member</strong> of ISTE.
                </p>
            </div>
        </section>
    )
}

export default Achivements;