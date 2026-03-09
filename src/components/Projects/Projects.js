import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="projects-section py-5">

      <div className="container">

        {/* Title */}

        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="text-center mb-5"
        >
          <h2 className="projects-title">
            Crafted with Precision
          </h2>

          <p className="projects-subtitle">
            Showcasing technical excellence and design sophistication
          </p>
        </motion.div>


        {/* FEATURED PROJECT */}

        <div className="row align-items-center mb-5">

          <motion.div
            className="col-lg-5"
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
          >

            <h6 className="featured-text">
              Featured Project
            </h6>

            <h2 className="project-name">
              {selectedProject.title}
            </h2>

            <p className="project-desc">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}

            <div className="tech-stack">

              {selectedProject.tech.map((tech,i)=>(
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}

            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
              className="visit-link"
            >
              Visit Live Project →
            </a>

          </motion.div>


          {/* Image */}

          <motion.div
            className="col-lg-7"
            initial={{opacity:0,scale:0.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.8}}
          >

            <div className="project-image">

              <img
                src={selectedProject.image}
                alt="project"
                className="img-fluid"
              />

            </div>

          </motion.div>

        </div>


        {/* PROJECT GALLERY */}

        <h3 className="gallery-title mb-4">
          Project Gallery
        </h3>

        <div className="project-scroll">

          {projects.map((project)=>(
            
            <motion.div
              key={project.id}
              whileHover={{scale:1.08,rotateY:10}}
              transition={{type:"spring",stiffness:200}}
              className="project-card"
              onClick={()=>setSelectedProject(project)}
            >

              <img src={project.image} alt="project"/>

              <div className="card-overlay">

                <h5>{project.title}</h5>

                <p>{project.category}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;