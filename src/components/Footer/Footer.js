import React from "react";
import "./Footer.css";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

     

      <div className="container">

        <div className="row footer-row">

          {/* LEFT */}
          <div className="col-lg-5">
            <div className="footer-profile">

              <div className="footer-avatar">GP</div>

              <div>
                <h4 className="footer-name">Gayatri Panda</h4>
                <p className="footer-role">Web Developer</p>
              </div>

            </div>

            <p className="footer-desc">
               Transforming ideas into interactive,responsive and<br/> 
               visually engaging  web experiences using modern <br/>
               front-end technologies.
            </p>

            <p className="footer-status">
              <i className="bi bi-clock"></i> Available for new opportunities
            </p>

          </div>

          {/* MIDDLE */}
          <div className="col-lg-3">
            <h5 className="footer-title">Explore</h5>

            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-lg-4">

            <h5 className="footer-title">Connect</h5>

            <div className="footer-social">
              <a href="#"><i className="bi bi-github"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-envelope"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
© 2026 Gayatri Panda — Crafted with ❤️ and &lt;GP/&gt;
          </p>

          <div className="footer-build">
            Built with React & Bootstrap

            <button className="scroll-btn" onClick={scrollTop}>
              <i className="bi bi-arrow-up"></i>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;