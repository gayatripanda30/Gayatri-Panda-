import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";


const Home = () => {

  const heroRef = useRef(null);

  const roles = [
    "Front-End Developer",
    "React Developer"
   
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  /* Typing Animation */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (index < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole.charAt(index));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
    }
  }, [index, roleIndex]);


  /* Cursor Glow Effect */

  useEffect(() => {
    const moveGlow = (e) => {
      const glow = document.querySelector(".cursor-glow");
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);


  /* Scroll Reveal */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add("show");
          }
        });
      },
      {threshold:0.3}
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el=>observer.observe(el));

  }, []);


  /* Magnetic Button */

  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetBtn = (e)=>{
    e.currentTarget.style.transform="translate(0px,0px)";
  }


  const handleDownload = async () => {
    const res = await fetch('/GAYATRI_PANDA_CV (1) (6).pdf');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "GAYATRI_PANDA_CV.pdf";
    a.click();
  };

  return (
    <section id="home" className="home-section" ref={heroRef}>

      <div className="cursor-glow"></div>

      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="text-center hero-content reveal">

          <span className="badge bg-light text-dark mb-3 typing-badge">
            {text}
          </span>

          <h1 className="home-title">
            Crafting <br />
            <span className="gradient-text">Digital Excellence</span>
          </h1>

          <p className="home-subtitle">
            Transforming ideas into modern, responsive, and user-friendly
            web applications using React and latest web technologies.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center">

            <a
              href="#projects"
              className="btn btn-dark px-4 py-2 hero-btn"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetBtn}
            >
              Explore Projects →
            </a>

            <button
              onClick={handleDownload}
              className="btn btn-dark px-4 py-2 hero-btn"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetBtn}
            >
              ⭳ Download Resume
            </button>

          </div>

          <div className="social-icons d-flex gap-5 justify-content-center mt-4">
            <a href="https://github.com/gayatripanda30" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gayatri-panda-072657248" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:pandagayatri413@gmail.com">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>

        </div>
        {/* Floating Icons */}
<div className="floating-icons">
  <FaReact className="float-icon react" />
  <FaJs className="float-icon js" />
  <FaHtml5 className="float-icon html" />
  <FaCss3Alt className="float-icon css" />
  <FaGithub className="float-icon github" />
</div>
      </div>
    </section>
  );
};

export default Home;