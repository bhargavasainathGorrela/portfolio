import './Contact.css';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2>
            <span className="bold">G</span>ET <span className="bold">I</span>N T<span className="thin">OUCH!</span>
          </h2>
          <p>
            I am always open to discussing new projects, creative ideas,
            or opportunities to be part of your visions.
          </p>

          <div className="contact-icons">
            <a href="mailto:bhargavasainath2119@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/916302428321" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/bhargavasainathGorrela" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bhargavasainath/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;