import './Projects.css';
import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      description: 'A full-stack online shopping platform with payment integration, featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
      technologies: ['React', 'Material UI','JavaScript', 'Stripe API'],
      liveDemo: 'https://example.com'
    },
    { 
      id: 2, 
      title: 'Task Management App', 
      description: 'A collaborative task manager with real-time updates, allowing teams to create, assign, and track tasks efficiently. Features include drag-and-drop interface, notifications, and progress tracking.',
      technologies: ['React', 'Firebase','Real-time Database', 'Authentication'],
      liveDemo: 'https://example.com'
    },
    { 
      id: 3, 
      title: 'Weather Dashboard', 
      description: 'Real-time weather information with interactive maps, providing current conditions, forecasts, and weather alerts. Includes location search, favorite cities, and detailed weather metrics.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Geolocation', 'Chart.js'],
      liveDemo: 'https://example.com'
    },
    { 
      id: 4, 
      title: 'FruitBox', 
      description: 'It features multiple fruit box options, detailed daily menus, and easy subscription management including pausing or changing boxes.',
      technologies: ['React', 'Javascript', 'Tailwind CSS', 'Redux', 'SEO'],
      liveDemo: 'https://bhargavasainathgorrela.github.io/FruitBox'
    }
  ];

  return (
    <section id="projects" className={`section projects-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="projects-container">
        <h2 className="projects-title">
          <span className="projects-icon">💼</span>
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              {project.liveDemo && (
                <a href={project.liveDemo} className="live-demo-link" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;