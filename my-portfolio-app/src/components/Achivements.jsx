import StudentMemberCertificate from '../assets/StudentMemberCertificate.jpeg';
import StudentMemberME from '../assets/StudentMemberME.jpeg';   
import '../components/Achivements.css';

function Achivements(){
    return (
        <div>
            <h1>My Achivements</h1>
            <div>
                <div className='achivements-container'>
                    <img src={StudentMemberCertificate}  className="achivements-img" />
                    
                </div>
                <div className='achivements-container'>
                    <img src={StudentMemberME} className="achivements-img" />
                </div>
                <p className='description'>
                    Received 'Student Member' certificate from 'Indian Society For Technical Education (ISTE) Karanataka Section' for the year 2024-25.
                </p>
            </div>
           
        </div>
    )
}

export default Achivements;