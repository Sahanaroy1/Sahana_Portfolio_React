// src/components/Projects.jsx
import React from 'react';
import './Projects.css';
import projectOne from '../assets/Weather_app.png';
import projectTwo from '../assets/Employee_tracker.png';
import projectThree from '../assets/Portfolio.png';
import projectFour from '../assets/Book_search.png';
import projectFive from '../assets/Logo_generator.png';
import projectSix from '../assets/Flavor_quest.png';



const projects = [
  {
    name: "Weather Forecast App ",
    description:
      "Weather Dashboard Application will display the weather of the selected city like its temperature, wind, humidity.",
    imageUrl: projectOne,
    link: "https://sahanaroy1.github.io/Weather_Forecast_App/",
    gitHub: "https://github.com/Sahanaroy1/Weather_Forecast_App",
  },
  {
    name: "Employee Tracker ",
    description:
      "Employee tracker application is for business owner to manage their database in handling deparments, employee details and roles to organize and plan their employee information..",
    imageUrl: projectTwo,
    link: "https://vimeo.com/937677662/5feef841fd?share=copy",
    gitHub: "https://github.com/Sahanaroy1/Employee-Tracker",
  },
  {
    name: "Portfolio",
    description:
      "My first portfolio built with HTML, CSS and Javascript",
    imageUrl: projectThree,
    link: "https://github.com/Sahanaroy1/Sahana.Roy_Portfolio",
    gitHub: "https://github.com/Sahanaroy1/Sahana.Roy_Portfolio",
   
  },
  {
    name: "Book Search",
    description:
      "Book search application built using MERN stack as MongoDB Database and React frontend",
    imageUrl: projectFour,
    link: "https://book-search-24of.onrender.com/",
    gitHub: "https://github.com/Sahanaroy1/Book_Search",
  },
  {
    name: "Logo Generator",
    description:
      "SVG logo generator is an application that will generate a logo with specified shape, colour and text. It would create a SVG file.",
    imageUrl: projectFive,
    link: "https://vimeo.com/927544063/6dcd2a7797?share=copy",
    gitHub: "https://github.com/Sahanaroy1/SVG-Logo-Generator",
  },
  {
    name: "Flavor Quest",
    description:
      "SVG logo generator is an application that will generate a logo with specified shape, colour and text. It would create a SVG file.",
    imageUrl: projectSix,
    link: "https://e-aji.github.io/flavour-quest/",
    gitHub: "https://github.com/e-aji/flavour-quest",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <img src={project.imageUrl}/>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Website Link
            </a>
            <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
              Github Link
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
