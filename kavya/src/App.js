import React, { useState } from 'react';
import './App.css';

const App = () => {
   return (
    <div>
      <header className="top-header">
        <div className="container">
          <nav className="top-nav">
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="social-icons">
              <a href="https://github.com/kavyyar" target="_blank" rel="noopener noreferrer"><img src="github.png" alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/kavya-r-2b6653273" target="_blank" rel="noopener noreferrer"><img src="in.jpg" alt="LinkedIn" /></a>
              <a href="Resume.pdf" target="_blank" rel="noopener noreferrer"><img src="res.png" alt="Resume" /></a>
            </div>
          </nav>
        </div>
      </header>

      <header className="main-header">
        <div className="container">
          <img src="/final.png" alt="Home Page" className="home-photo" /> 
        </div>
      </header>

      <section id="about" className="about-section">
        <div className="about-me-section">
          <h2>About Me</h2>
          <p>
            With a passion for crafting elegant, responsive, and user-friendly websites, I aim to bring ideas to life through clean and efficient code. 
            My dedication to continuous learning and staying updated with the latest trends in web development ensures that I deliver modern and functional solutions.
          </p>
          <ul>
            <li>Immersed in artistic projects or participating in fine arts events.</li>
            <li>Experimenting with new technologies, like AR/VR, for innovative applications.</li>
            <li>Sharing my passion for knowledge through mentorship and collaborating on projects.</li>
            <li>
              I thrive in environments that encourage creativity, innovation, and teamwork, always striving to leave a positive impact through my work.
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-list">
            <div className="skill-item">
              <h3>Front-End</h3>
              <p>HTML, CSS, JavaScript, React, Angular, jQuery</p>
            </div>
            <div className="skill-item">
              <h3>Back-End</h3>
              <p>Node.js, Express, PHP, Django</p>
            </div>
            <div className="skill-item">
              <h3>Other</h3>
              <p>C, SQL, MongoDB, Java</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <h1 className="bore">PROJECTS</h1>
      <section id="works"className="workflow-section">
        <div className="workflow-content">
          <h1 className="workflow-title">Home Delights: <br /> a website for ordering  home-baked cakes,cookies and pastries.</h1>
          <p className="workflow-description">
            The platform features an intuitive front-end interface where customers can browse meal options, place orders. On the backend, the system securely stores all order data, including customer details, and meal selections, in a database.
          </p>
          <button
  className="workflow-btn"
  onClick={() => window.open('https://github.com/kavyyar/HomeDelight.git', '_blank')}
>
  View Project
</button>
          <div className="workflow-info">
            <div className="workflow-info-item">
              <h4 className="info-title">Explorations</h4>
              <p className="info-description">User-friendly interface, backend Development and Database Management.</p>
            </div>
            <div className="workflow-info-item">
              <h4 className="info-title">Project type</h4>
              <p className="info-description">E-commerce</p>
            </div>
          </div>
        </div>
        <div className="workflow-image">
          <img src="project1.png" alt="Energy usage dashboard" className="dashboard-image" />
        </div>
      </section>
      <br></br>
      <section className="workflow-section1">
        <div className="workflow-content1">
          <h1 className="workflow-title1">Culinary Tales: <br /> a recipe book to explore different cuisines.</h1>
          <p className="workflow-description1">
            Culinary Tales is an engaging and dynamic recipe book website. This platform allows users to explore, share, and enjoy recipes from various cuisines while providing a seamless and user-friendly experience.
          </p>
          <button
  className="workflow-btn"
  onClick={() => window.open('https://github.com/kavyyar/MEAN-STACK---Culinary-Tales.git', '_blank')}
>
  View Project
</button>

          <div className="workflow-info-container1">
            <div className="workflow-info-item1">
              <h4 className="info-title1">Explorations</h4>
              <p className="info-description1">User Registration, Recipe Management, Search, Secure Backend.</p>
            </div>
            <div className="workflow-info-item1">
              <h4 className="info-title1">Project type</h4>
              <p className="info-description1">Content Management System</p>
            </div>
            <div className="workflow-info-item info-blue1">
              <h4 className="info-title1">Features</h4>
              <p className="info-description1">Recipe Categories, Recipe Collections, Seasonal Recipes.</p>
            </div>
            <div className="workflow-info-item info-green1">
              <h4 className="info-title1">Framework</h4>
              <p className="info-description1">M(mongodb), E(expressjs), A(angularjs), N(nodejs).</p>
            </div>
          </div>
        </div>
        <div className="workflow-image1">
          <img src="project2.png" alt="Energy usage dashboard" className="dashboard-image1" />
        </div>
      </section>
      <br></br>
      <section id="works"className="workflow-section2">
        <div className="workflow-content">
          <h1 className="workflow-title">MediConnect: <br /> a seamless Hospital Management System.</h1>
          <p className="workflow-description">
          It streamlines healthcare services by enabling users to register, log in, and book appointments online with ease. Designed for both patients and administrators, it offers secure data management, a user-friendly interface, and real-time updates to improve the overall healthcare experience.
          </p>
          <button
  className="workflow-btn"
  onClick={() => window.open('https://github.com/kavyyar/MERN-STACK---HOSPITAL-MANAGEMENT-SYSTEMS.git', '_blank')}
>
  View Project
</button>
          <div className="workflow-info">
            <div className="workflow-info-item">
              <h4 className="info-title">Explorations</h4>
              <p className="info-description">User-friendly interface, backend Development and Database Management.</p>
            </div>
            <div className="workflow-info-item">
              <h4 className="info-title">Project type</h4>
              <p className="info-description">Healthcare</p>
            </div>
          </div>
        </div>
        <div className="workflow-image">
          <img src="project3.png" alt="Energy usage dashboard" className="dashboard-image" />
        </div>
      </section>


      <section id="contact" className="contact-section">
  <div className="container">
    <h2>Contact</h2>
    <p>If you'd like to work with me or just say hello, feel free to reach out!</p>
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        alert("Thank you for your message! I look forward to connecting with you and will respond soon.");
      }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>
<footer className="main-footer">
        <div className="container">
          <p>&copy; 2024 Kavya R. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://github.com/kavyyar" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/kavya-r-2b6653273" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
