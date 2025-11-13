import './projects.css';
import DeMRI from '../assets/DeMRI.png';
import PlasticPhechan from '../assets/PlasticPhechan.png';
import CropWaterFootprint from '../assets/CropWaterFootprint.png';
import LearningPathGenerator from '../assets/LearningPathGenerator.png';

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
                            <p>
                                AI tool that analyzes heart MRI scans (DE-MRI) via a Gradio interface. 
                                Users upload a scan, and the model instantly classifies it as “Normal” or “Sick”, 
                                enabling faster cardiac screening and aiding doctors in quick diagnosis.
                            </p>
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
                            <p>
                                AI-powered tool using Gradio to analyze DE-MRI heart scans, 
                                instantly classifying them as Normal or Sick, enabling faster and more efficient cardiac screening.
                            </p>
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
                            <p>
                                AI model that predicts a crop’s water footprint using historical data and 
                                suggests water-efficient alternative crops, 
                                helping farmers make smarter, water-saving decisions.
                            </p>
                        </div>
                        {/* <div>
                            <p>Github link</p>
                        </div> */}
                    </div>

                     <div className="projects-card">
                        <h2 className='projects-heading'>
                            Learning Path Generator with Model Context Protocol
                        </h2>
                        <img src={LearningPathGenerator} alt="LearningPathGenerator project" className='project-image' />
                        <div >
                            <a href='https://nagamanicoder-genai-learning-path-generator-app-vrto30.streamlit.app/' className='project-demo'>DEMO</a>
                            <a href='https://github.com/Nagamanicoder/GenAI-Learning-Path-generator.git' className='project-demo'>CODE</a>
                        </div>
                        
                        <div className='project-description'>
                            <p>Technology Stack:</p>
                            <ul>
                                <li>Python</li>
                                <li>Streamlit</li>
                                <li>APIs/Integrations: Google AI Studio API, Pipedream (YouTube, Drive, Notion)</li>
                            </ul>
                            <p>Description:</p>
                            <p>
                                A Streamlit web app that generates personalized learning paths using the Model Context Protocol (MCP). 
                                It connects with YouTube, Google Drive, 
                                and Notion to provide an integrated learning experience with progress tracking and content organization.
                            </p>
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