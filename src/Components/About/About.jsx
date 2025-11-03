import './About.css';
import { FaFileAlt } from 'react-icons/fa';

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; 
    link.download = 'Bhargava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About</h2>
        
        <div className="about-content">
  <p>
    I'm <span className="highlight">Bhargava Sainath</span>, a passionate{' '}
    <span className="highlight">Front-End Developer at Daxinsoft Technologies</span>. 
    I specialize in building responsive and user-friendly web applications using{' '}
    <span className="highlight">React.js, JavaScript, HTML, and CSS</span>. 
    I love turning creative ideas into clean, interactive, and high-performing web experiences.
  </p>

  <p>
    I’m always eager to learn and explore new tools and technologies in the{' '}
    <span className="highlight">front-end ecosystem</span>. 
    My goal is to grow as a developer and build impactful digital products 
    that enhance user experience and simplify real-world problems.
  </p>
  <p>
    When I’m not coding, I enjoy exploring new tech tools, improving my design sense, 
    and collaborating on innovative projects that make a real impact.
  </p>
          <p className="cta-text">
            Let's build something great! ✨
          </p>

          <button className="resume-btn" onClick={handleDownloadResume}>
            <FaFileAlt className="resume-icon" />
            RESUME
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;