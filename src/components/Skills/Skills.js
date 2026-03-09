import React from "react";
import "./Skills.css";

const Skills = () => {

  const techSkills = [
    { name: "React.js", icon: "bi bi-react" },
    { name: "JavaScript", icon: "bi bi-filetype-js" },
    { name: "HTML5", icon: "bi bi-filetype-html" },
    { name: "CSS3", icon: "bi bi-filetype-css" },
    { name: "Bootstrap", icon: "bi bi-bootstrap" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Git & GitHub", icon: "bi bi-github" }
  ];

  const toolSkills = [
    { name: "WordPress", icon: "bi bi-wordpress" },
    { name: "Canva", icon: "bi bi-palette" },
    { name: "Content Creation", icon: "bi bi-pencil-square" },
    { name: "PowerPoint", icon: "bi bi-easel" },
    { name: "Excel", icon: "bi bi-file-earmark-spreadsheet" }
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Creativity"
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2 className="section-title">Technical Expertise</h2>

          <p className="section-subtitle">
            Transforming ideas into interactive, responsive, and
            visually engaging web experiences using modern front-end technologies.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* TECHNICAL SKILLS */}
          <div className="col-lg-4 d-flex">
            <div className="glass-card w-100">

              <h4 className="card-title">Technical Skills</h4>

              <div className="skills-list">

                {techSkills.map((skill, index) => (
                  <div key={index} className="skill-pill">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* TOOLS & PLATFORMS */}
          <div className="col-lg-4 d-flex">
            <div className="glass-card w-100">

              <h4 className="card-title">Tools & Platforms</h4>

              <div className="skills-list">

                {toolSkills.map((skill, index) => (
                  <div key={index} className="skill-pill">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="col-lg-4 d-flex">
            <div className="glass-card w-100">

              <h4 className="card-title">Soft Skills</h4>

              <div className="skills-list">

                {softSkills.map((skill, index) => (
                  <div key={index} className="skill-pill">
                    {skill}
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>

        {/* FLOATING ICONS */}

        <div className="floating-icons">

          <i className="bi bi-react"></i>
          <i className="bi bi-filetype-js"></i>
          <i className="bi bi-filetype-html"></i>
          <i className="bi bi-filetype-css"></i>
          <i className="bi bi-bootstrap"></i>
          <i className="bi bi-github"></i>

        </div>

      </div>

    </section>
  );
};

export default Skills;