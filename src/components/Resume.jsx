// src/components/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>My Resume</h2>
      <div className="resume-section">
        <h3>Experience</h3>
        <p>[Details about your work experience]</p>

        <h3>Education</h3>
        <p>[Details about your education]</p>

        <h3>Skills</h3>
        <ul>
          
          {/* Add more skills as needed */}
        </ul>

        <h3>Certifications</h3>
        <p>[Details about your certifications]</p>
      </div>
    </section>
  );
};

export default Resume;
