import './projects.css';
import PROJECTS from '../Data/projectsData.jsx';

const ProjectCard = ({ project }) => (
  <div className="projects-card">
    <h2 className='projects-heading'>{project.title}</h2>
    <img src={project.image} alt={project.alt} className='project-image' />
    <div className='project-description'>
      <p>Technology Stack:</p>
      <ul>
        {project.stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <p>Description:</p>
      <p>{project.description}</p>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <div className='project-container'>
      <h1>PROJECTS</h1>
      <div className='projects-container'>
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;