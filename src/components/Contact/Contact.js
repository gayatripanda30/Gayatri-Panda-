import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <div className="container">

        {/* HEADER */}
        <div className="text-center contact-header">

          <span className="contact-badge">Let's Connect</span>

          <h2 className="contact-title">
            Get In Touch
          </h2>

          <p className="contact-subtitle">
            Ready to bring your vision to life? I'm just a click away.
            Let's create something exceptional together.
          </p>

        </div>

        <div className="contact-card">

          <div className="row align-items-center">

            {/* LEFT SIDE */}
            <div className="col-lg-6 text-center text-lg-start">

              <div className="profile-info">

                <div className="profile-avatar">
                  GP
                </div>

                <div>
                  <h4>Gayatri Panda</h4>
                  <p className="role">Front-End Developer</p>
                </div>

              </div>

              <p className="contact-description">
                I believe in crafting digital experiences that blend
                innovation with functionality. Let's collaborate to
                bring your vision to life with modern web technologies.
              </p>

              <div className="availability">
                ⭐ Available for new projects
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">

              <h5 className="reach-title">Reach Out</h5>

              <div className="contact-links">
<a
  href="mailto:pandagayatri413@gmail.com"
  className="contact-card"
>

  <div className="contact-icon email-bg">
    <i className="bi bi-envelope"></i>
  </div>

  <div className="contact-text">
    <h6>Email</h6>
    <p>pandagayatri413@gmail.com</p>
  </div>

</a>


<a
  href="https://www.linkedin.com/"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>

  <div className="contact-icon linkedin-bg">
    <i className="bi bi-linkedin"></i>
  </div>

  <div className="contact-text">
    <h6>LinkedIn</h6>
    <p>linkedin.com/gayatri</p>
  </div>

</a>


<a
  href="https://github.com/gayatripanda30"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>

  <div className="contact-icon github-bg">
    <i className="bi bi-github"></i>
  </div>

  <div className="contact-text">
    <h6>GitHub</h6>
    <p>github.com/gayatripanda30</p>
  </div>

</a>


<a
  href="https://maps.google.com/?q=Jajpur"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>

  <div className="contact-icon location-bg">
    <i className="bi bi-geo-alt"></i>
  </div>

  <div className="contact-text">
    <h6>Location</h6>
    <p>Jajpur, Odisha, India</p>
  </div>

</a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;