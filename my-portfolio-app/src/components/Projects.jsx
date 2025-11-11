import './projects.css';
import DeMRI from '../assets/DeMRI.png';
import PlasticPhechan from '../assets/PlasticPhechan.png';
import CropWaterFootprint from '../assets/CropWaterFootprint.png';

function Projects() {
    return (
        <div>
            <div className='project-container'>
                <h1>My Projects</h1>
                <div className='projects-container'>
                    <div className="projects-card">
                        <h2 className='projects-heading'>
                            DEMRI Evaluation
                        </h2>
                        <img src={DeMRI} alt="De-MRI project" className='project-image' />
                        <div className='project-description'>
                            <p>Technology Stack:</p>
                            <ul>
                            <li>Deep Learning (DL)</li>
                            <li>Computer Vision</li>
                            <li>Gradio Framework</li>
                            <li>Medical Imaging (DE-MRI)</li>
                            </ul>

                            <p>Description:</p>
                            <ul>
                                <li>Goal: To automatically check heart MRI scans for signs of sickness or damage.</li>
                                <li>User Interface: Built with Gradio for easy use.</li>
                                <li>Process: A user uploads a Delayed Enhancement MRI (DE-MRI) scan image.</li>
                                <li>Output: The model instantly classifies the scan as "Sick" (abnormal) or "Normal" (healthy).</li>
                                <li>Impact: Speeds up initial cardiac screening and helps doctors quickly evaluate heart health.</li>
                            </ul>
                        </div>
                        {/* <div>
                            <p>Github link</p>
                        </div> */}
                    </div>
                    <div className="projects-card">
                        <h2 className='projects-heading'>
                            Plastic Phechan <br/> A Voice Bot
                        </h2>
                        <img src={PlasticPhechan} alt="plastic-phechan project" className='project-image' />
                        <div className='project-description'>
                            <p>Technology Stack:</p>
                            <ul>
                            <li>Large Language Models (LLMs — Ollama / Gemma:2B)</li>
                            <li>Voice-to-Text Processing</li>
                            <li>Web Interface</li>
                            </ul>

                            <p>Description:</p>
                            <ul>
                                <li>Goal: To automatically check heart MRI scans for signs of sickness or damage.</li>
                                <li>User Interface: Built with Gradio for easy use.</li>
                                <li>Process: A user uploads a Delayed Enhancement MRI (DE-MRI) scan image.</li>
                                <li>Output: The model instantly classifies the scan as "Sick" (abnormal) or "Normal" (healthy).</li>
                                <li>Impact: Speeds up initial cardiac screening and helps doctors quickly evaluate heart health.</li>
                            </ul>
                        </div>
                        {/* <div>
                            <p>Github link</p>
                        </div> */}
                    </div>
                    <div className="projects-card">
                        <h2 className='projects-heading'>
                            Crop WaterFootprint Prediction and Recommendation System
                        </h2>
                        <img src={CropWaterFootprint} alt="CropWaterFootprint project" className='project-image' />
                        <div className='project-description'>
                            <p>Technology Stack:</p>
                            <ul>
                            <li>Machine Learning (ML)</li>
                            <li>Historical/Geospatial Dataset Analysis</li>
                            <li>Python</li>
                            </ul>
                            <p>Description:</p>
                            <ul>
                                <li>Goal: To help farmers save water by predicting a crop's total water use and 
                                suggesting better alternatives.</li>
                                <li>Data Source: Trained on historical datasets (weather, soil, past water usage)—no real-time sensors used.</li>
                                <li>Process: User inputs State, District, and Crop. The model predicts the water footprint.</li>
                                <li>Output: If water usage is too high, the system recommends water-efficient alternative crops for that specific area.</li>
                                <li>Impact: Promotes data-driven decision-making for better water conservation in agriculture.</li>
                            </ul>
                        </div>
                        {/* <div>
                            <p>Github link</p>
                        </div> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projects;    