import React from 'react';
import './Resume.css'
import resume from '../assets/Sahana_Resume.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <div className='resume_main'>
      <h1>Click Here:<a href={resume} className='resume_link' target='_blank'> Resume</a></h1>
      <div className='fontend-skill'>
        <h2>Frontend Skills</h2>
        <p>HTML 5 </p>
        <p>CSS </p>
        <p>Javascript </p>
        <p>React</p>
      </div>
      <div className='backend-skill'>
        <h2>Backend Skills</h2>
        <p>Node</p>
        <p>Express</p>
        <p>PostgreSql</p>
        <p>Sequelize</p>
        <p>MongoDb</p>
        <p>Mongoose</p>
        <p>Mongo Db Atlas</p>
        <p>GrapgQl</p>
        <p>Render</p>
      </div>
    </div>
    </section>
  );
};

export default Resume;
