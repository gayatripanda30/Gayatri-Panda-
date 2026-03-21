import React, { useState } from "react";
import "./About.css";
import profile from "../../assets/gayatriimg2.jpeg";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [fade, setFade] = useState(false);

  const handleTab = (tab) => {
    setFade(true);
    setTimeout(() => {
      setActiveTab(tab);
      setFade(false);
    }, 200);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "story":
        return (
          <div className="about-story">
            <div className="row align-items-center">

              <div className="col-lg-8 text-center text-lg-start">
                <h3 className="section-title">Crafting Digital Experiences</h3>

                <p className="section-text">
                 Hello, I’m Gayatri Panda, a dedicated Web Developer with a strong focus on building modern, responsive, and user-centric web applications. With hands-on experience in HTML, CSS, JavaScript, and React, I specialize in transforming creative concepts into scalable, functional digital solutions. I am passionate about writing clean, maintainable code and continuously enhancing my technical expertise to stay aligned with evolving web technologies and industry best practices. I invite you to explore my projects to gain insight into my work and development approach.
                </p>

                <div className="highlights">
                  <h5 className="highlight-title">Key Highlights</h5>
                  <ul>
                    <li>Specialized in React & Modern UI</li>
                    <li>Clean architecture & reusable components</li>
                    <li>Performance optimization enthusiast</li>
                    <li>Modern responsive design</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 text-center mt-4 mt-lg-0">
                <img src={profile} alt="Gayatri Panda" className="profile-img"/>
              </div>

            </div>
          </div>
        );

      case "experience":
        return (
          <div className="timeline">
            <h3 className="section-title text-center mb-4">Professional Journey</h3>

            <div className="timeline-item">
              
              <div className="timeline-card">
                
                <h5>Web Developer Trainee</h5>
                <div className="timeline-year">Aug 2025 - Present</div>
                <h6 className="company-name">ze TaAi Labs pvt.ltd</h6>
                <p>
  • Built scalable and responsive UI components using React.js<br/>
  • Designed reusable and maintainable component architecture<br/>
  • Optimized performance for faster load times and smooth interactions<br/>
  • Integrated RESTful APIs for dynamic and real-time data rendering<br/>
  • Enhanced overall user experience with clean and intuitive design
</p>
              </div>
            </div>

<div className="timeline-item">
  
  <div className="timeline-card">
    <h5>Frontend Developer</h5>
    <div className="timeline-year">Dec 2025 - Mar 2026</div>
    <h6 className="company-name">Springer Capital</h6>
    <p>
     <p>
  • Built responsive and scalable web applications using Next.js and Tailwind CSS<br/>
  • Implemented dynamic routing and server-side rendering (SSR) for better performance<br/>
  • Designed reusable UI components for maintainability and scalability<br/>
  • Enhanced user experience with modern, mobile-first design principles<br/>
  • Collaborated with team members to deliver high-quality features on time
</p>
    </p>
  </div>
</div>

            <div className="timeline-item">
 
              <div className="timeline-card">

                <h5>Web Development Intern</h5>
                               <div className="timeline-year"> Sep 2024 - Oct 2024</div>
                <h6 className="company-name">OctaNet Pvt.Ltd</h6> 
                <p>
                    •Contributed to the development of responsive UI components using modern web technologies.<br/>
  •  Enhanced frontend performance and usability by optimizing layouts and improving user interactions. <br/>
  •  Collaborated with team members to deliver high-quality features within deadlines.
                </p>
       
       
                
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="row g-4">

            <div className="col-md-6">
              <h3 >FORMAL EDUCATION</h3>
              <div className="info-card">
                
                <p>
                 <strong> MCA – Master of Computer Applications</strong><br/>
                  Gandhi Engineering College , Bhubaneswar
                  (2023 – 2025) 
                </p>
                <p>
                 <strong> BCA – Bachelor of Computer Applications</strong><br/>
                  N.C Autonomous College, Jajpur
                 (2020 – 2023)
                </p>
                <p>
                <strong> +2 Science</strong><br/>
                 Gurukul Kalinga Higher Secondary School
                (2019 – 2021)
                </p>
              </div>
            </div>
            <div className="col-md-6">
               <h3 >PROFESSINAL DEVELOPEMT</h3>
              <div className="info-card">
                <p>Ongoing professional development through specialized certifications and focused learning tracks</p>
                <ul>
                  <li>Data Analysis- Microsoft</li>
                  <li>Full Stack Web Development (MERN Stack)</li>
                  <li>Advanced React Patterns & Performance</li>
                </ul>
              </div>
            </div>

          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="about-section">

      <div className="container">

        <div className="text-center mb-5">
          <h2>About Me</h2>
          <p className="about-subtitle">
            The story behind my work and passion for creating digital experiences.
          </p>
        </div>

        {/* TAB BUTTONS */}

        <div className="tab-buttons">

          <button
            className={`tab-btn ${activeTab === "story" ? "active-tab" : ""}`}
            onClick={() => handleTab("story")}
          >
            🚀 My Story
          </button>

          <button
            className={`tab-btn ${activeTab === "experience" ? "active-tab" : ""}`}
            onClick={() => handleTab("experience")}
          >
            💼 Experience
          </button>

          <button
            className={`tab-btn ${activeTab === "education" ? "active-tab" : ""}`}
            onClick={() => handleTab("education")}
          >
            🎓 Education
          </button>

        </div>

        {/* CONTENT WITH ANIMATION */}

        <div className={`content-card ${fade ? "fade-out" : "fade-in"}`}>
          {renderContent()}
        </div>

      </div>

    </section>
  );
};

export default About;