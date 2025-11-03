import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    'Frontend': [
      { name: 'HTML', icon: require("../../assets/icons/html_icon.png") },
      { name: 'CSS', icon: require("../../assets/icons/css_icon.png") },
      { name: 'JavaScript', icon: require("../../assets/icons/js.png") },
      { name: 'React', icon: require("../../assets/icons/react.png") },
      { name: 'Redux.js', icon: require("../../assets/icons/Redux.png") },
      { name: 'Tailwind CSS', icon: require("../../assets/icons/tailwind_icon.png") },
      { name: 'Bootstrap', icon: require("../../assets/icons/bootstrap.jpeg") }
    ],
    'Backend': [
      { name: 'TypeScript', icon: require("../../assets/icons/ts.png") },
      { name: 'Java', icon: require("../../assets/icons/java.png") },
      { name: 'MySQL', icon: require("../../assets/icons/MySQL.png") }
      // { name: 'MongoDB', icon: require("../../assets/icons/mongodb.jpeg") }
    ],
    'Tools': [
      { name: 'Git', icon: require("../../assets/icons/git_icon.png") },
      { name: 'GitHub', icon: require("../../assets/icons/github_icon.png") },
      { name: 'Postman', icon: require("../../assets/icons/postman.jpeg") },
      { name: 'VSCode', icon: require("../../assets/icons/vscode.png") }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="skills-main-title">Tech Stack</h2>
        
        {/* Category Tabs */}
        <div className="category-tabs">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="skill-category">
          <div className="skill-badges">
            {skillCategories[activeCategory].map((skill, index) => (
              <div key={index} className="skill-badge">
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
          
          {/* <h3 className="category-title">{activeCategory}</h3> */}
          
          {/* <div className="timeline">
            <div className="timeline-node">
              <div className="timeline-icon"></div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-node">
              <div className="timeline-icon"></div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-node">
              <div className="timeline-icon"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;