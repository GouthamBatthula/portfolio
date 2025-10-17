import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Goutham Batthula</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A passionate AI & Full Stack Developer
        </motion.p>
        <div className="socials">
          <a href="https://github.com/GouthamBatthula" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/saigoutham-batthula-1b489a337/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="saigouthambatthula@gmail.com"><FaEnvelope /></a>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm an undergraduate AI & DS student passionate about creating intelligent
          and user-centric solutions. I love combining technology, design, and logic
          to build impactful projects.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Face Recognition Attendance</h3>
            <p>Real-time attendance system using Python, OpenCV, and face_recognition.</p>
          </div>
          <div className="project-card">
            <h3>Crop Optimization System</h3>
            <p>AI-powered platform recommending optimal crops using environmental data.</p>
          </div>
          <div className="project-card">
            <h3>Eventify</h3>
            <p>Full-stack event management platform using MERN stack.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Let’s collaborate or just say hi 👋</p>
        <a href="mailto:youremail@example.com" className="contact-btn">Send a Message</a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Goutham Batthula. All rights reserved.</p>
      </footer>
    </div>
  );
}
