import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin } from 'lucide-react';
import "./Home.css";

const Home = () => {
  const words = ['Frontend Developer', 'React js Developer', 'Javascript Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const word = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.substring(0, currentText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    // Path to your resume file in the public folder or assets
    link.href = "../../assets/Resume.pdf"; // or require("../../assets/resume.pdf")
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        {/* Left side text */}
        <div className="home-text">
          <h1>
            Hi! I'm <span className="highlight">Bhargava.</span>
          </h1>
          <h1>
            A {' '}
            <span className="typing-text">
              {currentText}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p>
            Combining development skills with creative design,<br/>
            I transform concepts into dynamic, user-centered<br/>
            web solutions
          </p>
          
          <div className="home-actions">
            <button className="primary-btn" onClick={handleDownloadResume}>
              DOWNLOAD RESUME
            </button>
            </div>
            <br/>
            <div className="social-links">
              <a href="bhargavasainath2119@email.com" className="social-icon" aria-label="Email">
                <Mail size={22} />
              </a>
              <a href="https://github.com/bhargavasainathGorrela" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/bhargavasainath/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          
        </div>

      
        <div className="home-image">
          <img src={require("../../assets/icons/bhargav.jpg")} alt="Bhargava presenting" />
        </div>
      </div>
    </section>
  );
};

export default Home;