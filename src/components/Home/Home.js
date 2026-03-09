import React from "react";
import "./Home.css";

const Home = () => {
  const handleDownload = async () => {
    try {
      const res = await fetch('/GAYATRI_PANDA_CV (1) (6).pdf');
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      // Trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'GAYATRI_PANDA_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.open(url, '_blank');

      // Clean up the object URL after a short delay
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch (err) {
      console.error('Download failed, opening fallback:', err);
      // Fallback: open file directly from public folder
     window.open('/GAYATRI_PANDA_CV.pdf', '_blank');
    }
  };
  return (
    <section id="home" className="home-section">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <span className="badge bg-light text-dark mb-3">
  Front-End Developer
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
            <a href="#projects" className="btn btn-dark px-4 py-2">
              Explore Projects →
            </a>

            <button onClick={handleDownload} className="btn btn-dark px-4 py-2">
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
      </div>
    </section>
  );
};

export default Home;
