import DeMRI from "../assets/DeMRI.png";
import PlasticPhechan from "../assets/PlasticPhechan.png";
import CropWaterFootprint from "../assets/CropWaterFootprint.png";
import LearningPathGenerator from "../assets/LearningPathGenerator.png";    


const PROJECTS = [
  {
    id: 1,
    title: "DEMRI Evaluation",
    stack: ["Deep Learning (DL)", "Computer Vision", "Gradio Framework", "Medical Imaging (DE-MRI)"],
    description:"AI tool that analyzes heart MRI scans (DE-MRI) via a Gradio interface.Users upload a scan, and the model instantly classifies it as “Normal” or “Sick”, enabling faster cardiac screening and aiding doctors in quick diagnosis.",
    image: DeMRI,
    alt: "De-MRI project"
  },
  {
    id: 2,
    title: "Plastic Phechan A Voice Bot",
    stack: ["Large Language Models (LLMs — Ollama / Gemma:2B)", "Voice-to-Text Processing", "Web Interface"],   
    description: "An AI voice web app for Bangalore, helping users identify plastic waste and locate nearby recycling centers. Rewards Eco-Points for proper disposal, promoting a low-cost, community-driven circular economy.",
    image: PlasticPhechan,
    alt: "Plastic Phechan project"
  },
  {
    id: 3,
    title: "Crop WaterFootprint Prediction and Recommendation System",
    stack: ["Machine Learning (ML)", "Historical/Geospatial Dataset Analysis", "Python"],
    description: "AI model that predicts a crop’s water footprint using historical data and suggests water-efficient alternative crops, helping farmers make smarter, water-saving decisions.",
    image: CropWaterFootprint,
    alt: "CropWaterFootprint project"
  },
  {
    id: 4,
    title: "Learning Path Generator with Model Context Protocol",
    stack: ["Python", "Streamlit", "APIs/Integrations: Google AI Studio API, Pipedream (YouTube, Drive, Notion)"],
    description: "A Streamlit web app that generates personalized learning paths using the Model Context Protocol (MCP). It connects with YouTube, Google Drive, and Notion to provide an integrated learning experience with progress tracking and content organization.",
    image: LearningPathGenerator,
    alt: "LearningPathGenerator project"    
  }
]

export default PROJECTS;